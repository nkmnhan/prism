import { readFile, writeFile, stat, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DOCS_DIR = join(ROOT, '.hig-docs')
const URLS_FILE = join(__dirname, 'hig-urls.json')
const DEFAULT_MAX_AGE_DAYS = 30

export async function isStale(filePath, maxAgeDays) {
  try {
    const stats = await stat(filePath)
    const ageMs = Date.now() - stats.mtimeMs
    const ageDays = ageMs / (1000 * 60 * 60 * 24)
    return ageDays >= maxAgeDays
  } catch {
    return true
  }
}

function stripHtml(html) {
  return html
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s{2,}/g, '\n')
    .trim()
}

async function fetchSection(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'PrismHIGDownloader/1.0' },
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const html = await response.text()
  return stripHtml(html)
}

async function run() {
  const args = process.argv.slice(2)
  const force = args.includes('--force')
  const maxAgeDaysIdx = args.indexOf('--max-age-days')
  const maxAgeDays = maxAgeDaysIdx !== -1
    ? parseInt(args[maxAgeDaysIdx + 1], 10)
    : DEFAULT_MAX_AGE_DAYS

  const urls = JSON.parse(await readFile(URLS_FILE, 'utf-8'))
  await mkdir(DOCS_DIR, { recursive: true })

  let fetched = 0
  let skipped = 0
  let errors = 0

  for (const { section, url } of urls) {
    const filePath = join(DOCS_DIR, `${section}.md`)
    const stale = force || await isStale(filePath, maxAgeDays)

    if (!stale) {
      console.log(`[skip]  ${section}`)
      skipped++
      continue
    }

    try {
      process.stdout.write(`[fetch] ${section}... `)
      const content = await fetchSection(url)
      const header = `# ${section}\nSource: ${url}\nFetched: ${new Date().toISOString()}\n\n`
      await writeFile(filePath, header + content, 'utf-8')
      console.log('done')
      fetched++
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      errors++
    }
  }

  console.log(`\nDone — ${fetched} fetched, ${skipped} skipped, ${errors} errors`)
}

// Only run when invoked directly (not when imported by tests)
const isMain = process.argv[1] === fileURLToPath(import.meta.url)
if (isMain) run()
