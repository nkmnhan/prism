import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm, writeFile } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'
import { isStale } from './hig-downloader.mjs'

describe('isStale', () => {
  let tempDir

  before(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'hig-test-'))
  })

  after(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('returns true for non-existent file', async () => {
    const result = await isStale(join(tempDir, 'missing.md'), 30)
    assert.equal(result, true)
  })

  it('returns false for recently created file within max age', async () => {
    const filePath = join(tempDir, 'recent.md')
    await writeFile(filePath, 'content')
    const result = await isStale(filePath, 30)
    assert.equal(result, false)
  })

  it('returns true when max age is 0 (always stale)', async () => {
    const filePath = join(tempDir, 'recent.md')
    await writeFile(filePath, 'content')
    const result = await isStale(filePath, 0)
    assert.equal(result, true)
  })
})
