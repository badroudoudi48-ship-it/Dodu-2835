import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpLeft, Check, Menu, X } from "lucide-react";
import { worlds, readLocal, saveLocal } from "../lib/worlds";
import {
  MindExperiment,
  ChemistryExperiment,
  PhilosophyExperiment,
  ReflectionExperiment,
  BehaviorExperiment,
  MuseumExperiment,
} from "../components/experiments";

const experiments = {
  mind: MindExperiment,
  chemistry: ChemistryExperiment,
  philosophy: PhilosophyExperiment,
  reflection: ReflectionExperiment,
  behavior: BehaviorExperiment,
  museum: MuseumExperiment,
};
export default function WorldPage({ slug }: { slug: string }) {
  const world = worlds.find((w) => w.slug === slug)!;
  const [menu, setMenu] = useState(false);
  const [explored, setExplored] = useState(() => readLocal(`dody-${world.id}`, "") === "1");
  const Experiment = experiments[world.slug];
  const next = worlds[(worlds.indexOf(world) + 1) % worlds.length];
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.title = `${world.title} — عالم دودي`;
    window.scrollTo(0, 0);
    setExplored(readLocal(`dody-${world.id}`, "") === "1");
    setMenu(false);
  }, [world]);
  function onExplore() {
    setExplored(true);
    saveLocal(`dody-${world.id}`, "1");
  }
  return (
    <main
      dir="rtl"
      lang="ar"
      className={`world-page world-${slug}`}
      style={{ "--accent": world.color } as CSSProperties}
    >
      <header className="site-header">
        <Link href="/" className="wordmark">
          <span className="logo-spark">✧</span> عالم دودي
        </Link>
        <div className="header-right">
          <Link href="/" className="back-link">
            <ArrowRight size={16} /> إلى البداية
          </Link>
          <button
            className="ambient-button"
            aria-expanded={menu}
            aria-label={menu ? "أغلق قائمة العوالم" : "افتح قائمة العوالم"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={19} /> : <Menu size={19} />}
            <span>العوالم</span>
          </button>
        </div>
      </header>
      {menu && (
        <nav className="world-menu" aria-label="العوالم الستة">
          {worlds.map((w) => (
            <Link
              href={`/${w.slug}`}
              key={w.slug}
              onClick={() => setMenu(false)}
              className={w.slug === slug ? "active" : ""}
            >
              <span>{w.number}</span>
              {w.title}
              <ArrowUpLeft size={16} />
            </Link>
          ))}
        </nav>
      )}
      <div className="world-content">
        <section className="world-intro">
          <p className="eyebrow">
            العالم {world.number} <span className="eyebrow-line" /> تجربة أولى
          </p>
          <div className="intro-title">
            <h1>{world.title}</h1>
            <span className="world-symbol">✧</span>
          </div>
          <h2>{world.subtitle}</h2>
          <p>{world.intro}</p>
        </section>
        <section className="topic-experience" aria-label={world.topic}>
          <div className="topic-bar">
            <span>{world.topic}</span>
            <span>
              {explored ? (
                <>
                  <Check size={14} /> تم الاستكشاف
                </>
              ) : (
                "دع الفضول يقودك"
              )}
            </span>
          </div>
          <Experiment key={slug} onExplore={onExplore} />
        </section>
        <section className="next-world">
          <div>
            <p className="eyebrow">باب آخر، سؤال آخر</p>
            <h2>الفضول لا ينتهي هنا.</h2>
            <p>
              هذه بداية صغيرة، وليست مكتبة مكتملة.
              <br />
              ستّة موضوعات متاحة، ومساحة لمئات الاكتشافات القادمة.
            </p>
          </div>
          <Link href={`/${next.slug}`}>
            <span>اكتشف {next.title}</span>
            <ArrowUpLeft size={27} />
          </Link>
        </section>
      </div>
      <footer className="world-footer">
        <span>عالم دودي · هدية من القلب</span>
        <Link href="/">العودة إلى البداية ↑</Link>
      </footer>
    </main>
  );
}

export function NotFound() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);
  return (
    <main className="not-found" dir="rtl" lang="ar">
      <span>٤٠٤</span>
      <h1>هذا الباب لم يُفتح بعد.</h1>
      <Link href="/" className="primary-button">
        عد إلى البداية <ArrowRight size={17} />
      </Link>
    </main>
  );
}
