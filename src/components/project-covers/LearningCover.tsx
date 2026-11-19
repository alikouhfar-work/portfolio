import { FC } from 'react'

import { CoverProps } from './types'

export const LearningCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2b2820" />
        <stop offset="1" stopColor="#3d3527" />
      </linearGradient>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <circle cx="96" cy="84" r="128" fill="#d9932f" fillOpacity="0.12" />
    <circle cx="96" cy="84" r="84" fill="none" stroke="#d9932f" strokeOpacity="0.25" />

    {[
      { x: 126, y: 92, w: 218, h: 66, rotate: -4, opacity: 0.32 },
      { x: 138, y: 122, w: 218, h: 66, rotate: -1.5, opacity: 0.52 },
      { x: 150, y: 152, w: 218, h: 104, rotate: 0, opacity: 1 },
    ].map((card, i) => (
      <g key={i} transform={`rotate(${card.rotate} ${card.x + card.w / 2} ${card.y})`}>
        <rect
          x={card.x}
          y={card.y}
          width={card.w}
          height={card.h}
          rx="9"
          fill="#f1e7d4"
          opacity={card.opacity}
        />
        <rect x={card.x + 16} y={card.y + 17} width="88" height="5" rx="2.5" fill="#2b2820" opacity="0.5" />
        <rect x={card.x + 16} y={card.y + 30} width="132" height="3" rx="1.5" fill="#2b2820" opacity="0.25" />
      </g>
    ))}

    <g>
      <rect x="150" y="152" width="218" height="104" rx="9" fill="#f1e7d4" />
      <rect x="168" y="172" width="104" height="6" rx="3" fill="#2b2820" opacity="0.75" />
      <rect x="168" y="188" width="146" height="3" rx="1.5" fill="#2b2820" opacity="0.3" />
      <rect x="168" y="198" width="122" height="3" rx="1.5" fill="#2b2820" opacity="0.2" />
      <rect x="168" y="224" width="182" height="9" rx="4.5" fill="#2b2820" opacity="0.1" />
      <rect x="168" y="224" width="124" height="9" rx="4.5" fill="#d9932f" />
      <circle cx="292" cy="228.5" r="8" fill="#f1e7d4" stroke="#d9932f" strokeWidth="2" />
      <text
        x="168"
        y="248"
        fill="#2b2820"
        fontFamily="ui-monospace, monospace"
        fontSize="7"
        letterSpacing="1.2"
        opacity="0.5"
      >
        68% COMPLETE
      </text>
    </g>

    <g fill="none" stroke="#f1e7d4" strokeOpacity="0.45">
      <circle cx="398" cy="266" r="24" />
      <path d="M398 242 a24 24 0 0 1 0 48" stroke="#d9932f" strokeWidth="3" />
      <path d="M50 272 h64 M50 284 h38 M50 296 h50" />
    </g>

    <text
      x="398"
      y="316"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—04
    </text>
    <text
      x="52"
      y="52"
      fill="#f1e7d4"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.7"
    >
      ISILEARNING
    </text>
  </svg>
)
