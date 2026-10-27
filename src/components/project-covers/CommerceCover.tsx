import { FC } from 'react'

import { CoverProps } from './types'

export const CommerceCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2a211f" />
        <stop offset="1" stopColor="#43322c" />
      </linearGradient>
      <pattern id={`${svgId}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
        <path d="M22 0 H0 V22" fill="none" stroke="#f1e7d4" strokeOpacity="0.06" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <rect width="480" height="360" fill={`url(#${svgId}-grid)`} />
    <circle cx="382" cy="88" r="88" fill="#d9932f" fillOpacity="0.14" />

    <g stroke="#f1e7d4" fill="none">
      <path d="M126 150 L226 104 L326 150 L326 244 L226 290 L126 244 Z" strokeOpacity="0.5" />
      <path d="M126 150 L226 196 L326 150 M226 196 V290" strokeOpacity="0.3" />
      <path d="M166 170 L266 124 L266 196 L166 242 Z" fill="#f1e7d4" fillOpacity="0.06" />
    </g>
    <g>
      <path
        d="M206 164 h54 l10 92 h-74 Z"
        fill="#f1e7d4"
        fillOpacity="0.1"
        stroke="#d9932f"
        strokeOpacity="0.7"
      />
      <path d="M220 164 v-14 a13 13 0 0 1 26 0 v14" fill="none" stroke="#d9932f" strokeWidth="2" />
      <circle cx="233" cy="214" r="8" fill="#d9932f" fillOpacity="0.8" />
    </g>

    <g fill="none" stroke="#f1e7d4" strokeOpacity="0.35">
      <path d="M58 82 v44 M36 104 h44" />
      <circle cx="58" cy="104" r="20" />
    </g>

    <text
      x="58"
      y="300"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.7"
    >
      TBAO / STOREFRONT
    </text>
    <text
      x="426"
      y="326"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—05
    </text>
  </svg>
)
