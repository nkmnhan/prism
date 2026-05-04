import React from 'react'
import { clsxMerge } from '../../utils/clsxMerge'

// ─── SVG filter singleton ─────────────────────────────────────────────────────
// Injected once into the document body — matches liquid-glass.css filter IDs.
// The feTurbulence approach is 100% GPU: no canvas, no per-frame JS.

const FILTER_MOUNT_ID = 'prism-glass-filters'

function ensureFilters(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(FILTER_MOUNT_ID)) return

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('id', FILTER_MOUNT_ID)
  svg.setAttribute('aria-hidden', 'true')
  svg.setAttribute('focusable', 'false')
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none'

  svg.innerHTML = `
    <defs>
      <filter id="lg-distort"
              color-interpolation-filters="sRGB"
              x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise"
                      baseFrequency="0.009 0.009"
                      numOctaves="1" seed="3" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise"
                           scale="16"
                           xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <filter id="lg-distort-subtle"
              color-interpolation-filters="sRGB"
              x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise"
                      baseFrequency="0.012 0.012"
                      numOctaves="1" seed="3" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise"
                           scale="8"
                           xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>`

  document.body.insertBefore(svg, document.body.firstChild)
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface PrismGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gaussian blur in px (default: 20) */
  blur?: number
  /** Brightness multiplier (default: 1.15) */
  brightness?: number
  /** Saturation multiplier (default: 1.8) */
  saturate?: number
  /**
   * Distortion variant (default: "standard").
   * "none"     — pure blur+saturate, works in all browsers.
   * "subtle"   — low-amplitude turbulence (small elements / nav).
   * "standard" — full turbulence warp (cards, sheets).
   * Firefox and WebKit apply the SVG displacement; Chrome gracefully falls
   * back to blur+saturate only.
   */
  distortion?: 'none' | 'subtle' | 'standard'
  /** Corner radius in px (default: 20) */
  borderRadius?: number
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * PrismGlass — Apple-style liquid glass panel.
 *
 * GPU-only rendering:
 * • transform: translateZ(0)  + will-change: backdrop-filter → compositor layer
 * • backdrop-filter: url(#lg-distort) blur() brightness() saturate()
 *   – feTurbulence lens warp on Firefox/WebKit (GPU rasterised)
 *   – Chrome ignores url() → graceful blur+saturate fallback
 * • Zero per-frame JS — ensureFilters() runs once on mount, writes one SVG node.
 *
 * For pure HTML/CSS (no React) see liquid-glass.css.
 */
export function PrismGlass({
  blur = 20,
  brightness = 1.15,
  saturate = 1.8,
  distortion = 'standard',
  borderRadius = 20,
  className,
  style,
  children,
  ...props
}: PrismGlassProps) {
  React.useEffect(ensureFilters, [])

  const filterId =
    distortion === 'subtle'   ? 'lg-distort-subtle' :
    distortion === 'standard' ? 'lg-distort'        :
    null

  const backdropFilter = [
    filterId ? `url('#${filterId}')` : null,
    `blur(${blur}px)`,
    `brightness(${brightness})`,
    `saturate(${saturate})`,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={clsxMerge('prism-glass', className)}
      style={{
        borderRadius,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        background: 'var(--prism-glass-bg)',
        border: '1px solid var(--prism-glass-border)',
        boxShadow: [
          '0 4px 24px rgba(0,0,0,0.15)',
          'inset 0 -10px 24px rgba(255,255,255,0.16)',
          'inset 0 -1px 4px rgba(255,255,255,0.68)',
          'inset 0  1px 0   rgba(255,255,255,0.62)',
        ].join(', '),
        isolation: 'isolate',
        transform: 'translateZ(0)',
        willChange: 'backdrop-filter',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
