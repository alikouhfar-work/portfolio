import { FC } from 'react'

import { CoverProps } from './types'

export const FleetCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#14201f" />
        <stop offset="1" stopColor="#233430" />
      </linearGradient>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <g stroke="#93b7f2" strokeOpacity="0.12">
      {[0, 1, 2, 3, 4, 5].map((n) => (
        <path key={n} d={`M0 ${60 + n * 48} H480`} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <path key={n} d={`M${40 + n * 50} 0 V360`} />
      ))}
    </g>
    <g fill="none" stroke="#93b7f2" strokeOpacity="0.2">
      <path d="M-20 300 C80 240 120 320 220 258 C320 196 360 262 500 198" />
      <path d="M-20 330 C80 270 120 350 220 288 C320 226 360 292 500 228" />
      <path d="M-20 270 C80 210 120 290 220 228 C320 166 360 232 500 168" />
    </g>

    <path
      d="M64 276 C128 250 144 176 218 186 C286 196 302 118 388 108"
      fill="none"
      stroke="#93b7f2"
      strokeWidth="2.5"
      strokeDasharray="7 7"
    />
    <path
      d="M64 276 C128 250 144 176 218 186 C286 196 302 118 388 108"
      fill="none"
      stroke="#93b7f2"
      strokeWidth="8"
      strokeOpacity="0.08"
    />

    {[
      { x: 64, y: 276 },
      { x: 218, y: 186 },
      { x: 388, y: 108 },
    ].map((node, i) => (
      <g key={i}>
        <circle cx={node.x} cy={node.y} r="13" fill="#14201f" stroke="#93b7f2" strokeOpacity="0.5" />
        <circle cx={node.x} cy={node.y} r="4" fill="#93b7f2" />
        <circle cx={node.x} cy={node.y} r="22" fill="none" stroke="#93b7f2" strokeOpacity="0.15" />
      </g>
    ))}

    <g>
      <rect
        x="292"
        y="196"
        width="92"
        height="64"
        rx="10"
        fill="#17211f"
        stroke="#93b7f2"
        strokeOpacity="0.3"
      />
      <path d="M308 244 L336 216 L362 238 L388 210" fill="none" stroke="#d9932f" strokeWidth="2" />
      <circle cx="336" cy="216" r="3" fill="#d9932f" />
      <circle cx="362" cy="238" r="3" fill="#d9932f" />
      <circle cx="388" cy="210" r="3" fill="#d9932f" />
      <text
        x="308"
        y="254"
        fill="#93b7f2"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.4"
        opacity="0.7"
      >
        LIVE / 24 UNITS
      </text>
    </g>

    <g stroke="#93b7f2" strokeOpacity="0.35" fill="none">
      <path d="M56 70 h28 M70 56 v28" />
      <path d="M396 292 h28 M410 278 v28" />
    </g>
    <text
      x="56"
      y="44"
      fill="#93b7f2"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.4"
      opacity="0.7"
    >
      35.6892 N / 51.3890 E
    </text>
    <text
      x="426"
      y="330"
      fill="#93b7f2"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—03
    </text>
  </svg>
)
