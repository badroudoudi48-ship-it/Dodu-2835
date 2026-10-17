import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Moon, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { NightRoom, OrbitArt } from "../components/night-room";
import { worlds } from "../lib/worlds";

export default function Entrance() {
  const [still, setStill] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    document.documentElement.lang = "ko";
    document.documentElement.dir = "ltr";
    document.title = "도디의 세계 — 어떤 이야기는 질문으로 시작된다";
  }, []);
  return (
    <main id="top" className={`entrance ${still ? "still" : ""}`} lang="ko">
      <header className="site-header">
        <Link href="/" className="wordmark">
          <span className="logo-spark">✧</span> 도디의 세계
        </Link>
        <div className="header-right">
          <span className="gift-label">오직 당신을 위한 작은 우주</span>
          <button
            className="ambient-button"
            onClick={() => setStill(!still)}
            aria-label={still ? "움직임 켜기" : "움직임 멈추기"}
          >
            <Moon size={15} />
            <span>{still ? "고요한 밤" : "살아 있는 밤"}</span>
          </button>
        </div>
      </header>
      <section className="opening">
        <div className="opening-copy">
          <p className="eyebrow">
            <span /> 당신에게 건네는 첫 번째 장면
          </p>
          <h1>
            어떤 이야기는
            <br />
            질문으로 시작된다
          </h1>
          <p className="opening-sub">
            익숙한 세상 너머, 아직 만나지 못한 당신의 호기심.
            <br className="desktop-break" /> 오늘 밤, 작은 문 하나를 열어 보세요.
          </p>
          <a className="primary-button" href="#worlds">
            무슨 일이 일어날까? <ArrowUpRight size={17} />
          </a>
          <span className="cta-note">여섯 개의 세계 · 하나의 끝없는 호기심</span>
        </div>
        <NightRoom still={still} />
        <a href="#worlds" className="scroll-cue">
          <span>조금 더 아래로</span>
          <ArrowDown size={15} />
        </a>
      </section>
      <section className="world-directory" id="worlds">
        <div className="directory-heading">
          <p className="eyebrow">다음 장면은 당신의 선택</p>
          <h2>
            어느 세계로
            <br />
            <span>떠나 볼까요?</span>
          </h2>
          <p>
            각 문 뒤에는 작은 실험이 기다려요.
            <br />
            문을 열면, 이야기는 아랍어로 이어집니다.
          </p>
        </div>
        <div className="world-links">
          {worlds.map((w) => (
            <Link
              key={w.slug}
              href={`/${w.slug}`}
              className="world-link"
              style={{ "--accent": w.color } as React.CSSProperties}
            >
              <span className="world-number">{w.number}</span>
              <div>
                <h3>{w.ko}</h3>
                <p>{w.koDescription}</p>
              </div>
              <span className={`mini-art mini-${w.slug}`}>
                <i />
                <i />
                <i />
              </span>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <section className="closing">
        <OrbitArt />
        <p className="eyebrow">아직 쓰이지 않은 페이지들</p>
        <h2>
          오늘은 여섯 번의 시작.
          <br />
          언젠가는, 삼백예순다섯 번의 발견.
        </h2>
        <p>
          서두르지 않고, 하나씩.
          <br />이 작은 세계는 당신의 호기심과 함께 자라납니다.
        </p>
        <Sparkles size={20} />
      </section>
      <footer className="entrance-footer">
        <span>도디의 세계</span>
        <span>당신을 생각하며 만든 선물</span>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </main>
  );
}
