import { FC } from 'react'

import { CoverProps } from './types'

export const PortfolioCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <pattern id={`${svgId}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0 H0 V24" fill="none" stroke="#1c1e22" strokeOpacity="0.09" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill="#e8e5dd" />
    <rect width="480" height="360" fill={`url(#${svgId}-grid)`} />
    <circle cx="384" cy="86" r="112" fill="none" stroke="#1c1e22" strokeOpacity="0.16" />
    <circle cx="384" cy="86" r="72" fill="none" stroke="#1c1e22" strokeOpacity="0.1" />

    <g stroke="#1c1e22" strokeOpacity="0.5" fill="none">
      <path d="M58 252 V110 H214 V252" />
      <path d="M58 110 L92 76 H248 L214 110" />
      <path d="M214 252 L248 218 V76" />
      <path d="M92 76 V218 L58 252" />
      <path d="M92 218 H214" strokeOpacity="0.2" />
    </g>
    <rect x="106" y="132" width="84" height="84" fill="#1c1e22" />
    <rect x="118" y="144" width="60" height="60" fill="none" stroke="#e8e5dd" strokeOpacity="0.5" />
    <path d="M136 196 h24 M148 184 v24" stroke="#e8e5dd" strokeOpacity="0.65" />

    <g fill="none" stroke="#1c1e22" strokeOpacity="0.28">
      <path d="M286 162 h118 M286 178 h88 M286 194 h104" />
      <path d="M286 242 h118 M286 258 h72" />
    </g>
    <path d="M286 158 v88" stroke="#2563eb" strokeOpacity="0.65" strokeWidth="2" />
    <text
      x="286"
      y="146"
      fill="#1c1e22"
      fontFamily="ui-monospace, monospace"
      fontSize="9"
      letterSpacing="2"
      opacity="0.55"
    >
      STUDIO / 2026
    </text>
    <text
      x="58"
      y="312"
      fill="#1c1e22"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.6"
    >
      A. KOUHFAR — SYSTEMS IN SPACE
    </text>
    <text
      x="426"
      y="326"
      fill="#1c1e22"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.45"
      textAnchor="end"
    >
      C—06
    </text>
  </svg>
)
