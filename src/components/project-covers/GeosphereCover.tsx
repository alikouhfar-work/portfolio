import { FC } from 'react'

import { CoverProps } from './types'

export const GeosphereCover: FC<CoverProps> = ({ svgId }) => (
  <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`${svgId}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#04080f" />
        <stop offset="1" stopColor="#0f1f33" />
      </linearGradient>
      <radialGradient id={`${svgId}-glow`} cx="64%" cy="48%" r="52%">
        <stop offset="0" stopColor="#4d7ef2" stopOpacity="0.24" />
        <stop offset="1" stopColor="#4d7ef2" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${svgId}-sphere`} cx="36%" cy="30%" r="74%">
        <stop offset="0" stopColor="#16293f" />
        <stop offset="1" stopColor="#060d18" />
      </radialGradient>
      <clipPath id={`${svgId}-clip`}>
        <circle cx="320" cy="180" r="120" />
      </clipPath>
    </defs>

    <rect width="480" height="360" fill={`url(#${svgId}-bg)`} />
    <rect width="480" height="360" fill={`url(#${svgId}-glow)`} />

    <g stroke="#4d7ef2" strokeOpacity="0.07">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <path key={n} d={`M${48 + n * 48} 0 V360`} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
        <path key={n} d={`M0 ${45 + n * 45} H480`} />
      ))}
    </g>

    <ellipse
      cx="320"
      cy="180"
      rx="152"
      ry="44"
      fill="none"
      stroke="#5bb8f5"
      strokeOpacity="0.25"
      strokeDasharray="4 6"
      transform="rotate(-18 320 180)"
    />

    <circle
      cx="320"
      cy="180"
      r="120"
      fill={`url(#${svgId}-sphere)`}
      stroke="#5bb8f5"
      strokeOpacity="0.35"
    />
    <g clipPath={`url(#${svgId}-clip)`} fill="none" stroke="#5bb8f5" strokeOpacity="0.2">
      {[0.35, 0.7].map((scale) => (
        <ellipse key={scale} cx="320" cy="180" rx={120 * scale} ry="120" />
      ))}
      {[0.35, 0.7].map((scale) => (
        <ellipse key={scale} cx="320" cy="180" rx="120" ry={120 * scale} />
      ))}
      <path d="M200 180 H440" strokeOpacity="0.32" />
      <path d="M320 60 V300" strokeOpacity="0.32" />
      <path
        d="M292 126 L328 112 L356 130 L350 154 L320 170 L296 158 Z"
        fill="#0047ab"
        fillOpacity="0.72"
        stroke="#8fd3ff"
        strokeOpacity="0.9"
        strokeWidth="1.4"
      />
      <path d="M340 158 L372 148 L392 166 L378 184 L346 182 Z" fill="#2a5fd8" fillOpacity="0.45" />
    </g>
    <circle cx="328" cy="112" r="3" fill="#eaf1fb" />
    <circle cx="328" cy="112" r="8" fill="none" stroke="#eaf1fb" strokeOpacity="0.45" />

    <rect
      x="42"
      y="96"
      width="144"
      height="132"
      rx="8"
      fill="#060d18"
      fillOpacity="0.9"
      stroke="#5bb8f5"
      strokeOpacity="0.22"
    />
    <g fill="none" stroke="#5bb8f5" strokeOpacity="0.14">
      <path d="M42 150 H186" />
      <path d="M42 192 H186" />
      <path d="M86 96 V228" />
      <path d="M138 96 V228" />
    </g>
    <g fill="none" stroke="#8fd3ff" strokeOpacity="0.55">
      <path d="M52 206 C70 192 82 202 94 186 C108 168 122 178 134 164" />
      <path d="M58 128 C76 124 90 136 106 128 C120 122 132 130 146 124" />
      <path d="M120 214 C134 206 146 216 158 208" strokeOpacity="0.35" />
    </g>
    <path d="M96 186 L118 174 L132 188 L114 202 Z" fill="#0047ab" fillOpacity="0.55" stroke="#8fd3ff" strokeOpacity="0.8" />

    <text
      x="42"
      y="56"
      fill="#eaf1fb"
      fontFamily="ui-monospace, monospace"
      fontSize="11"
      letterSpacing="3.4"
      opacity="0.85"
    >
      GEOSPHERE
    </text>
    <text
      x="42"
      y="72"
      fill="#5bb8f5"
      fontFamily="ui-monospace, monospace"
      fontSize="8"
      letterSpacing="2"
      opacity="0.6"
    >
      GEOGRAPHICAL ENCYCLOPEDIA
    </text>
    <text
      x="438"
      y="72"
      fill="#5bb8f5"
      fontFamily="ui-monospace, monospace"
      fontSize="8"
      letterSpacing="1.8"
      opacity="0.55"
      textAnchor="end"
    >
      35.8 N / 51.4 E
    </text>
    <text
      x="42"
      y="248"
      fill="#8fd3ff"
      fontFamily="ui-monospace, monospace"
      fontSize="8"
      letterSpacing="1.8"
      opacity="0.6"
    >
      2D — MAPLIBRE
    </text>

    <g>
      <rect
        x="42"
        y="268"
        width="96"
        height="22"
        rx="11"
        fill="#060d18"
        stroke="#5bb8f5"
        strokeOpacity="0.28"
      />
      <rect x="91" y="268" width="47" height="22" rx="11" fill="#2a5fd8" fillOpacity="0.4" />
      <path d="M91 270 V288" stroke="#5bb8f5" strokeOpacity="0.28" />
      <text
        x="66"
        y="283"
        fill="#cfdcee"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.4"
        opacity="0.75"
        textAnchor="middle"
      >
        2D
      </text>
      <text
        x="114"
        y="283"
        fill="#eaf1fb"
        fontFamily="ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.4"
        textAnchor="middle"
      >
        3D
      </text>
    </g>

    <text
      x="42"
      y="336"
      fill="#eaf1fb"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2.6"
      opacity="0.6"
    >
      GEOSPHERE / DUAL VIEW
    </text>
    <text
      x="438"
      y="336"
      fill="#eaf1fb"
      fontFamily="ui-monospace, monospace"
      fontSize="10"
      letterSpacing="2"
      opacity="0.5"
      textAnchor="end"
    >
      C—08
    </text>
  </svg>
)
