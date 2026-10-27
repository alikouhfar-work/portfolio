import { FC } from 'react'

import { CoverProps } from './types'

export const BooksCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1b2a23" />
        <stop offset="1" stopColor="#3a4e43" />
      </linearGradient>
      <linearGradient id={`${svgId}-page`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f7e7d1" />
        <stop offset="1" stopColor="#d8c3a5" />
      </linearGradient>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <circle cx="382" cy="86" r="116" fill="none" stroke="#e8c982" strokeOpacity="0.18" />
    <circle cx="382" cy="86" r="78" fill="none" stroke="#e8c982" strokeOpacity="0.12" />

    {[
      { x: 72, y: 134, w: 26, h: 168, fill: '#e8c982' },
      { x: 108, y: 104, w: 34, h: 198, fill: '#f7e7d1' },
      { x: 152, y: 148, w: 22, h: 154, fill: '#b98f52' },
      { x: 184, y: 118, w: 40, h: 184, fill: '#6f8577' },
      { x: 234, y: 164, w: 24, h: 138, fill: '#e8c982' },
      { x: 268, y: 92, w: 32, h: 210, fill: '#f7e7d1' },
      { x: 310, y: 140, w: 28, h: 162, fill: '#8ba394' },
      { x: 348, y: 118, w: 38, h: 184, fill: '#d3b583' },
      { x: 396, y: 156, w: 24, h: 146, fill: '#e8c982' },
    ].map((spine, i) => (
      <g key={i}>
        <rect
          x={spine.x}
          y={spine.y}
          width={spine.w}
          height={spine.h}
          rx="2"
          fill={spine.fill}
          fillOpacity={i % 3 === 0 ? 0.92 : 0.72}
        />
        <rect x={spine.x + 6} y={spine.y + 14} width={spine.w - 12} height="3" fill="#24352c" opacity="0.4" />
        <rect
          x={spine.x + 6}
          y={spine.y + 24}
          width={spine.w - 18}
          height="2"
          fill="#24352c"
          opacity="0.25"
        />
      </g>
    ))}
    <rect x="54" y="302" width="384" height="5" fill="#e8c982" opacity="0.45" />

    <g>
      <path d="M178 246 L300 224 L354 258 L232 280 Z" fill={`url(#${svgId}-page)`} />
      <path d="M178 246 L232 280 L232 302 L178 268 Z" fill="#d8c3a5" />
      <path d="M232 280 L354 258 L354 280 L232 302 Z" fill="#e6d3b8" />
      <path d="M232 280 L232 302" stroke="#3a4e43" strokeWidth="1.5" strokeOpacity="0.45" />
      {[0, 1, 2].map((line) => (
        <path
          key={line}
          d={`M198 ${255 + line * 7} L266 ${243 + line * 7}`}
          stroke="#3a4e43"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
      ))}
      {[0, 1].map((line) => (
        <path
          key={line}
          d={`M264 ${277 + line * 7} L338 ${264 + line * 7}`}
          stroke="#3a4e43"
          strokeWidth="1.2"
          strokeOpacity="0.24"
        />
      ))}
    </g>

    <text
      x="54"
      y="78"
      fill="#e8c982"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="3"
      opacity="0.8"
    >
      SHIRALINIA / BOOKS
    </text>
    <text
      x="426"
      y="326"
      fill="#f7e7d1"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—01
    </text>
  </svg>
)
