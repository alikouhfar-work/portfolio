import { FC } from 'react'

import { CoverProps } from './types'

export const ArtCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#263a52" />
        <stop offset="1" stopColor="#172230" />
      </linearGradient>
      <linearGradient id={`${svgId}-form`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fcf6ed" />
        <stop offset="1" stopColor="#e7c9b2" />
      </linearGradient>
    </defs>
    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <rect x="40" y="34" width="400" height="292" fill="none" stroke="#fcf6ed" strokeOpacity="0.18" />
    <circle cx="352" cy="122" r="94" fill="#17b4b4" fillOpacity="0.82" />
    <circle cx="352" cy="122" r="94" fill="none" stroke="#fcf6ed" strokeOpacity="0.3" />
    <path
      d="M40 262 C138 190 194 300 278 236 C340 188 394 214 440 186"
      fill="none"
      stroke="#fcf6ed"
      strokeWidth="30"
      strokeLinecap="round"
      opacity="0.14"
    />
    <path d="M178 276 C178 192 214 150 264 150 C314 150 342 190 342 276 Z" fill={`url(#${svgId}-form)`} />
    <path d="M178 276 C178 226 196 190 224 164 L228 276 Z" fill="#00609b" opacity="0.55" />
    <path d="M264 150 C294 150 318 168 330 200 L264 226 Z" fill="#e7c9b2" opacity="0.8" />
    <circle cx="264" cy="150" r="30" fill="#263a52" />
    <circle cx="264" cy="150" r="30" fill="none" stroke="#fcf6ed" strokeOpacity="0.3" />
    <rect x="178" y="276" width="164" height="4" fill="#fcf6ed" opacity="0.6" />

    <g stroke="#fcf6ed" strokeWidth="1.6" fill="none" opacity="0.85">
      <path d="M82 106 c10 -10 24 -10 34 0 c10 -8 22 -5 27 3 c-14 6 -24 6 -38 2 c-10 0 -18 0 -23 -5 Z" />
      <path d="M126 138 c8 -8 20 -8 28 0 c8 -6 18 -4 22 2 c-11 5 -20 5 -31 2 c-8 0 -15 0 -19 -4 Z" />
    </g>

    <text
      x="72"
      y="318"
      fill="#fcf6ed"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="3"
      opacity="0.75"
    >
      MARTEX / 209 ARTISTS
    </text>
    <text
      x="416"
      y="58"
      fill="#fcf6ed"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—02
    </text>
  </svg>
)
