export function NightRoom({ still }: { still: boolean }) {
  return (
    <div className={`night-room ${still ? "still" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="wall" x2="0" y2="1">
            <stop stopColor="#0a0919" />
            <stop offset="1" stopColor="#211931" />
          </linearGradient>
          <linearGradient id="window" x2="0" y2="1">
            <stop stopColor="#111426" />
            <stop offset=".65" stopColor="#242944" />
            <stop offset="1" stopColor="#5a416a" />
          </linearGradient>
          <linearGradient id="wood" x2="0" y2="1">
            <stop stopColor="#584251" />
            <stop offset=".1" stopColor="#30202c" />
            <stop offset="1" stopColor="#140e1a" />
          </linearGradient>
          <linearGradient id="curtain">
            <stop stopColor="#080815" />
            <stop offset=".5" stopColor="#3a2a48" />
            <stop offset="1" stopColor="#171122" />
          </linearGradient>
          <radialGradient id="glow">
            <stop stopColor="#d7b6ff" stopOpacity=".28" />
            <stop offset="1" stopColor="#9472ca" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampglow">
            <stop stopColor="#ffe6c7" stopOpacity=".3" />
            <stop offset="1" stopColor="#cc9cdf" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="floor" x2="0" y2="1">
            <stop stopColor="#181220" />
            <stop offset="1" stopColor="#05050c" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <pattern id="citylights" width="21" height="26" patternUnits="userSpaceOnUse">
            <rect x="7" y="9" width="3" height="5" fill="#f0c6b2" opacity=".32" />
          </pattern>
        </defs>
        <rect width="1440" height="820" fill="url(#wall)" />
        <path d="M0 0H1440V30L1100 103H220Z" fill="#05050d" />
        <path d="M120 0V644M121 644H1440" stroke="#765982" strokeOpacity=".14" />
        <ellipse cx="940" cy="440" rx="620" ry="480" fill="url(#glow)" />
        <rect
          x="703"
          y="155"
          width="481"
          height="445"
          fill="#070610"
          stroke="#6a526e"
          strokeWidth="8"
        />
        <rect x="715" y="164" width="457" height="426" fill="url(#window)" />
        <circle cx="1107" cy="228" r="25" fill="#ddc9f8" opacity=".28" filter="url(#blur)" />
        <g opacity=".66">
          <path
            d="M715 590V470h45v-36h55v72h26V415h48v117h23V482h70v-39h45v67h40V407h45v-23h18v45h42v161Z"
            fill="#101123"
          />
          <path
            d="M715 590V470h45v-36h55v72h26V415h48v117h23V482h70v-39h45v67h40V407h45v-23h18v45h42v161Z"
            fill="url(#citylights)"
          />
        </g>
        <g className="rain-strokes" stroke="#c6bfdf" strokeWidth="1" opacity=".28">
          {Array.from({ length: 48 }, (_, i) => (
            <path
              key={i}
              d={`M${727 + ((i * 43) % 430)} ${170 + ((i * 79) % 355)}l-3 29`}
              style={{ animationDelay: `-${i * 0.17}s` }}
            />
          ))}
        </g>
        <g fill="#ece6fa" className="snow-dots">
          {Array.from({ length: 30 }, (_, i) => (
            <circle
              key={i}
              cx={724 + ((i * 67) % 439)}
              cy={175 + ((i * 37) % 405)}
              r={i % 3 === 0 ? 1.8 : 1}
              style={{ animationDelay: `-${i * 0.43}s` }}
            />
          ))}
        </g>
        <path d="M944 159v438M709 371h470" stroke="#100e1c" strokeWidth="9" />
        <path d="M945 162v434M718 375h457" stroke="#8b6c97" strokeOpacity=".32" strokeWidth="1" />
        <path d="M688 145h510" stroke="#18111f" strokeWidth="13" />
        <path d="M687 149c-13 113 22 192-17 459h-98c41-212 47-335 48-459Z" fill="url(#curtain)" />
        <path d="M1195 148c20 171-16 291 24 459h99c-44-194-52-329-54-459Z" fill="url(#curtain)" />
        <g stroke="#ad86c5" strokeOpacity=".14" fill="none">
          <path d="M650 150c0 152-21 302-27 447M670 150c-8 127 1 303-26 447M1217 150c30 172-4 320 47 450M1240 150c12 131 7 306 47 450" />
        </g>
        <rect
          x="191"
          y="254"
          width="159"
          height="205"
          fill="#0d0b17"
          stroke="#594356"
          strokeWidth="4"
        />
        <rect x="204" y="267" width="133" height="179" fill="#282038" />
        <circle cx="271" cy="330" r="31" fill="#ac85c5" opacity=".27" />
        <path d="M205 405l46-57 39 52 22-24 25 45v25H205Z" fill="#141020" />
        <path d="M162 503h260" stroke="#463047" strokeWidth="9" />
        <g fill="#2c2037">
          <rect x="194" y="474" width="13" height="25" />
          <rect x="212" y="460" width="17" height="39" />
          <rect x="232" y="465" width="11" height="34" />
          <rect x="247" y="457" width="15" height="42" />
        </g>
        <rect y="644" width="1440" height="176" fill="url(#floor)" />
        <g stroke="#665172" strokeOpacity=".11">
          <path d="M0 697h1440M0 764h1440M100 820l280-176M450 820l145-176M780 820l-20-176M1170 820l-180-176" />
        </g>
        <ellipse cx="931" cy="671" rx="353" ry="99" fill="url(#glow)" />
        <ellipse cx="956" cy="540" rx="214" ry="156" fill="url(#lampglow)" />
        <path d="M555 600h658l47 34H521Z" fill="#614855" />
        <path d="M521 634h739v17H521Z" fill="url(#wood)" />
        <path d="M562 650v156h19l15-156M1192 650l14 156h18V650" fill="#251924" />
        <path d="M596 653h204v59H596Z" fill="#30222d" stroke="#71505d" strokeOpacity=".35" />
        <path d="M683 677h28" stroke="#a47b87" strokeWidth="3" />
        <path d="M973 610h125l-18-5h-89Z" fill="#948294" />
        <path d="M1035 605V478l-40-31" fill="none" stroke="#9a8199" strokeWidth="6" />
        <path d="M954 452l23-51h64l23 51Z" fill="#d7b5d8" />
        <path d="M955 452h108" stroke="#fff0df" strokeWidth="4" />
        <path d="M751 603l68-12 65 16-66 18Z" fill="#bc9aaa" />
        <path d="M818 600v24M758 607l53-9M830 601l46 10" stroke="#604658" strokeWidth="1" />
        <path d="M871 618l-29-18" stroke="#a89ebc" strokeWidth="3" />
        <path d="M930 581v23c0 15 31 15 31 0v-23Z" fill="#ab869e" />
        <ellipse cx="945" cy="581" rx="15.5" ry="5" fill="#3d293b" />
        <path d="M961 584c19-3 18 21 0 18" fill="none" stroke="#ab869e" strokeWidth="4" />
        <g className="steam" stroke="#ceb7dc" strokeOpacity=".3" fill="none">
          <path d="M943 568c-10-14 8-15 0-31M952 567c8-10-7-16 0-25" />
        </g>
        <path
          d="M677 677q-23-101 58-106q91-9 74 106l-6 80H681Z"
          fill="#18131e"
          stroke="#634961"
          strokeWidth="3"
        />
        <path d="M700 602q41-29 85 0v65h-85Z" fill="#211925" />
        <path d="M696 755l-17 65M790 755l13 65" stroke="#3a293a" strokeWidth="8" />
        <path d="M1308 647l-10-72h64l-9 72Z" fill="#34283d" />
        <g fill="#38324a">
          <path d="M1327 576c-104-57-63-156-5-28c-50-134 11-159 10-7c31-141 105-125 14-5c79-74 103-27-11 36Z" />
        </g>
        <rect width="1440" height="820" fill="#060510" opacity=".13" />
      </svg>
      <div className="room-vignette" />
      <div className="room-caption">
        <span className="tiny-dot" /> 서울의 어느 밤 <span>창밖의 작은 우주</span>
      </div>
    </div>
  );
}

export function OrbitArt({ kind = "orbit" }: { kind?: string }) {
  return (
    <div className={`orbit-art ${kind}`} aria-hidden="true">
      <div className="orb-core" />
      <div className="orbit-ring ring-a" />
      <div className="orbit-ring ring-b" />
      <div className="orbit-ring ring-c" />
      <span className="orbit-star" />
    </div>
  );
}
