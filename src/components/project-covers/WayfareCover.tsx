import { FC } from 'react'

import { CoverProps } from './types'

export const WayfareCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f7f2e7" />
        <stop offset="1" stopColor="#e4dac6" />
      </linearGradient>
      <pattern id={`${svgId}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M32 0 H0 V32" fill="none" stroke="#17201d" strokeOpacity="0.05" />
      </pattern>
    </defs>

    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <rect width="480" height="360" fill={`url(#${svgId}-grid)`} />

    <g fill="none" stroke="#1e5b4f" strokeOpacity="0.14">
      <path d="M-20 312 C60 276 96 306 156 276 C216 246 250 278 306 254 C362 230 400 258 500 220" />
      <path d="M-20 332 C60 296 96 326 156 296 C216 266 250 298 306 274 C362 250 400 278 500 240" />
      <path d="M-20 292 C60 256 96 286 156 256 C216 226 250 258 306 234 C362 210 400 238 500 200" />
    </g>

    <path
      d="M104 220 C132 180 196 166 234 192 C270 216 266 252 232 272 C194 294 128 268 104 220 Z"
      fill="#dce9e3"
      fillOpacity="0.75"
      stroke="#1e5b4f"
      strokeOpacity="0.32"
    />
    <path
      d="M330 244 C350 220 392 220 406 242 C418 262 400 284 368 282 C338 280 320 262 330 244 Z"
      fill="#dce9e3"
      fillOpacity="0.6"
      stroke="#1e5b4f"
      strokeOpacity="0.24"
    />

    <path
      d="M146 252 C196 226 226 192 272 168 C318 144 356 188 392 224"
      fill="none"
      stroke="#8f5410"
      strokeWidth="1.6"
      strokeDasharray="5 6"
      strokeOpacity="0.55"
    />

    {[
      { x: 146, y: 252, visited: true },
      { x: 272, y: 168, visited: false },
      { x: 392, y: 224, visited: false },
    ].map((pin) => (
      <g key={`${pin.x}-${pin.y}`} transform={`translate(${pin.x} ${pin.y})`}>
        <ellipse cx="0" cy="1.5" rx="8" ry="2.4" fill="#17201d" opacity="0.1" />
        <path
          d="M0 0 C-3.4 -6.2 -9 -11.6 -9 -16.6 A9 9 0 1 1 9 -16.6 C9 -11.6 3.4 -6.2 0 0 Z"
          fill={pin.visited ? '#1e5b4f' : '#a9651a'}
          stroke="#f7f2e7"
          strokeOpacity="0.65"
        />
        {pin.visited ? (
          <path
            d="M-3.6 -16.6 L-1.2 -14 L4 -19.2"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <circle cx="0" cy="-16.6" r="3.4" fill="#f7f2e7" />
        )}
      </g>
    ))}

    <g fill="none" stroke="#17201d" strokeOpacity="0.28">
      <path d="M404 82 v28 M390 96 h28" />
      <circle cx="404" cy="96" r="13" />
    </g>

    <text
      x="42"
      y="56"
      fill="#17201d"
      fontFamily="ui-monospace, monospace"
      fontSize="11"
      letterSpacing="3.4"
      opacity="0.85"
    >
      WAYFARE
    </text>
    <text
      x="42"
      y="72"
      fill="#133c34"
      fontFamily="ui-monospace, monospace"
      fontSize="8"
      letterSpacing="2"
      opacity="0.92"
    >
      TRAVEL WISHLIST / MAP
    </text>
    <text
      x="438"
      y="72"
      fill="#17201d"
      fontFamily="ui-monospace, monospace"
      fontSize="8"
      letterSpacing="1.8"
      opacity="0.8"
      textAnchor="end"
    >
      2D MAPLIBRE
    </text>

    <g>
      <circle cx="48" cy="296" r="4" fill="#a9651a" />
      <text
        x="58"
        y="300"
        fill="#2c3a34"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.6"
        opacity="0.85"
      >
        WISHLIST
      </text>
      <circle cx="128" cy="296" r="4" fill="#1e5b4f" />
      <text
        x="138"
        y="300"
        fill="#2c3a34"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.6"
        opacity="0.85"
      >
        VISITED
      </text>
      <text
        x="438"
        y="300"
        fill="#17201d"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.8"
        opacity="0.8"
        textAnchor="end"
      >
        PLACES / 06
      </text>
    </g>

    <text
      x="42"
      y="336"
      fill="#17201d"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.8"
    >
      WAYFARE / WISHLIST → VISITED
    </text>
    <text
      x="438"
      y="336"
      fill="#17201d"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.8"
      textAnchor="end"
    >
      C—09
    </text>
  </svg>
)
