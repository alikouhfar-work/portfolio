'use client'

import { FC, useId } from 'react'
import { ProjectCover as ProjectCoverVariant } from '@/types/project'

type ProjectCoverProps = {
  variant: ProjectCoverVariant
  title: string
}

export const ProjectCover: FC<ProjectCoverProps> = ({ variant, title }) => {
  const uid = useId().replace(/:/g, '')

  return (
    <div className="h-full w-full" role="img" aria-label={title}>
      {variant === 'books' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1b2a23" />
              <stop offset="1" stopColor="#3a4e43" />
            </linearGradient>
            <linearGradient id={`${uid}-page`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f7e7d1" />
              <stop offset="1" stopColor="#d8c3a5" />
            </linearGradient>
          </defs>
          <rect width="480" height="360" fill={`url(#${uid}-bg)`} />
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
              <rect
                x={spine.x + 6}
                y={spine.y + 14}
                width={spine.w - 12}
                height="3"
                fill="#24352c"
                opacity="0.4"
              />
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
            <path d="M178 246 L300 224 L354 258 L232 280 Z" fill={`url(#${uid}-page)`} />
            <path d="M178 246 L232 280 L232 302 L178 268 Z" fill="#d8c3a5" />
            <path d="M232 280 L354 258 L354 280 L232 302 Z" fill="#e6d3b8" />
            <path
              d="M232 280 L232 302"
              stroke="#3a4e43"
              strokeWidth="1.5"
              strokeOpacity="0.45"
            />
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
            S—01
          </text>
        </svg>
      )}

      {variant === 'art' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#263a52" />
              <stop offset="1" stopColor="#172230" />
            </linearGradient>
            <linearGradient id={`${uid}-form`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fcf6ed" />
              <stop offset="1" stopColor="#e7c9b2" />
            </linearGradient>
          </defs>
          <rect width="480" height="360" fill={`url(#${uid}-bg)`} />
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
          <path
            d="M178 276 C178 192 214 150 264 150 C314 150 342 190 342 276 Z"
            fill={`url(#${uid}-form)`}
          />
          <path
            d="M178 276 C178 226 196 190 224 164 L228 276 Z"
            fill="#00609b"
            opacity="0.55"
          />
          <path
            d="M264 150 C294 150 318 168 330 200 L264 226 Z"
            fill="#e7c9b2"
            opacity="0.8"
          />
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
            M—02
          </text>
        </svg>
      )}

      {variant === 'fleet' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#14201f" />
              <stop offset="1" stopColor="#233430" />
            </linearGradient>
          </defs>
          <rect width="480" height="360" fill={`url(#${uid}-bg)`} />
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
            <rect x="292" y="196" width="92" height="64" rx="10" fill="#17211f" stroke="#93b7f2" strokeOpacity="0.3" />
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
            F—03
          </text>
        </svg>
      )}

      {variant === 'learning' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2b2820" />
              <stop offset="1" stopColor="#3d3527" />
            </linearGradient>
          </defs>
          <rect width="480" height="360" fill={`url(#${uid}-bg)`} />
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
            <text x="168" y="248" fill="#2b2820" fontFamily="ui-monospace, monospace" fontSize="7" letterSpacing="1.2" opacity="0.5">
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
            L—04
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
      )}

      {variant === 'commerce' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2a211f" />
              <stop offset="1" stopColor="#43322c" />
            </linearGradient>
            <pattern id={`${uid}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M22 0 H0 V22" fill="none" stroke="#f1e7d4" strokeOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="480" height="360" fill={`url(#${uid}-bg)`} />
          <rect width="480" height="360" fill={`url(#${uid}-grid)`} />
          <circle cx="382" cy="88" r="88" fill="#d9932f" fillOpacity="0.14" />

          <g stroke="#f1e7d4" fill="none">
            <path
              d="M126 150 L226 104 L326 150 L326 244 L226 290 L126 244 Z"
              strokeOpacity="0.5"
            />
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
            <path
              d="M220 164 v-14 a13 13 0 0 1 26 0 v14"
              fill="none"
              stroke="#d9932f"
              strokeWidth="2"
            />
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
      )}

      {variant === 'portfolio' && (
        <svg
          viewBox="0 0 480 360"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <pattern id={`${uid}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0 H0 V24" fill="none" stroke="#1c1e22" strokeOpacity="0.09" />
            </pattern>
          </defs>
          <rect width="480" height="360" fill="#e8e5dd" />
          <rect width="480" height="360" fill={`url(#${uid}-grid)`} />
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
            P—06
          </text>
        </svg>
      )}
    </div>
  )
}
