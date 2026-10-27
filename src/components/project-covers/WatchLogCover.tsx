import { FC } from 'react'

import { CoverProps } from './types'

export const WatchLogCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#11141b" />
        <stop offset="1" stopColor="#242b3a" />
      </linearGradient>
      <radialGradient id={`${svgId}-glow`} cx="50%" cy="42%" r="58%">
        <stop offset="0" stopColor="#93b7f2" stopOpacity="0.2" />
        <stop offset="1" stopColor="#93b7f2" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <rect width="480" height="360" fill={`url(#${svgId}-glow)`} />

    <g fill="#090b10" opacity="0.9">
      <rect x="0" y="0" width="28" height="360" />
      <rect x="452" y="0" width="28" height="360" />
    </g>
    <g fill="#f1e7d4" opacity="0.16">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <g key={n}>
          <rect x="8" y={14 + n * 38} width="12" height="18" rx="2" />
          <rect x="460" y={14 + n * 38} width="12" height="18" rx="2" />
        </g>
      ))}
    </g>

    <rect
      x="76"
      y="58"
      width="328"
      height="200"
      rx="10"
      fill="#0d1016"
      stroke="#93b7f2"
      strokeOpacity="0.25"
    />
    <rect x="90" y="72" width="300" height="172" rx="6" fill="#171d27" />

    <circle cx="240" cy="152" r="36" fill="none" stroke="#f1e7d4" strokeOpacity="0.5" />
    <circle cx="240" cy="152" r="27" fill="#93b7f2" fillOpacity="0.08" />
    <path d="M229 133 L263 152 L229 171 Z" fill="#d9932f" />

    <g stroke="#f1e7d4" strokeOpacity="0.12">
      <path d="M90 108 H390" />
      <path d="M90 196 H390" />
    </g>

    <rect x="90" y="266" width="300" height="6" rx="3" fill="#f1e7d4" opacity="0.12" />
    <rect x="90" y="266" width="188" height="6" rx="3" fill="#d9932f" />
    <circle cx="278" cy="269" r="6" fill="#f1e7d4" stroke="#d9932f" strokeWidth="2" />

    <text
      x="90"
      y="292"
      fill="#93b7f2"
      fontFamily="ui-monospace, monospace"
      fontSize="9"
      letterSpacing="1.8"
      opacity="0.7"
    >
      S02 · E05 — 38 MIN
    </text>
    <text
      x="390"
      y="292"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="9"
      letterSpacing="1.8"
      opacity="0.45"
      textAnchor="end"
    >
      62% WATCHED
    </text>

    <g fill="#f1e7d4" opacity="0.55">
      <rect x="90" y="310" width="58" height="7" rx="2" />
      <rect x="156" y="310" width="36" height="7" rx="2" opacity="0.6" />
      <rect x="200" y="310" width="46" height="7" rx="2" opacity="0.35" />
      <rect x="254" y="310" width="28" height="7" rx="2" opacity="0.22" />
    </g>

    <text
      x="58"
      y="40"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.7"
    >
      CHRONICLE / WATCH LOG
    </text>
    <text
      x="426"
      y="330"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—07
    </text>
  </svg>
)
