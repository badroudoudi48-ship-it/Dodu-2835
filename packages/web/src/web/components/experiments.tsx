import { useEffect, useState } from "react";
import { RotateCcw, Check, ArrowUpLeft, Feather, Eye, Compass } from "lucide-react";
import { readLocal, saveLocal } from "../lib/worlds";

function Reset({ onClick }: { onClick: () => void }) {
  return (
    <button className="text-button" onClick={onClick}>
      <RotateCcw size={15} /> ابدأ من جديد
    </button>
  );
}

export function MindExperiment({ onExplore }: { onExplore: () => void }) {
  const [contrast, setContrast] = useState(82);
  const [reveal, setReveal] = useState(false);
  return (
    <>
      <div className="experiment-stage illusion-stage">
        <div className="illusion-squares">
          <div style={{ background: `hsl(250 10% ${reveal ? 50 : 100 - contrast}%)` }}>
            <span />
          </div>
          <div style={{ background: `hsl(250 10% ${reveal ? 50 : contrast}%)` }}>
            <span />
          </div>
        </div>
        <p className="stage-caption">أيّ المربعين الصغيرين يبدو أفتح؟</p>
      </div>
      <div className="controls">
        <label htmlFor="contrast">
          غيّر المشهد، لا المربع <span>{contrast}٪</span>
        </label>
        <input
          id="contrast"
          aria-label="تباين الخلفيتين"
          type="range"
          min="50"
          max="94"
          value={contrast}
          disabled={reveal}
          onChange={(e) => {
            setContrast(+e.target.value);
            onExplore();
          }}
        />
        <div className="control-row">
          <button
            className="primary-button"
            onClick={() => {
              setReveal(!reveal);
              onExplore();
            }}
          >
            <Eye size={17} />
            {reveal ? "أعد الخلفيتين" : "أزل الخدعة"}
          </button>
          <Reset
            onClick={() => {
              setContrast(82);
              setReveal(false);
            }}
          />
        </div>
      </div>
      <div className="insight" aria-live="polite">
        <span>ما وراء التجربة</span>
        <h3>{reveal ? "المربعان لم يتغيّرا قط." : "السياق يشارك في صناعة ما تراه."}</h3>
        <p>
          المربعان الصغيران لهما اللون نفسه تمامًا. اختلاف الخلفية يغيّر إدراكنا للسطوع؛ هذه صورة مبسّطة
          للتباين المتزامن، لا اختبارًا لصحة النظر. ماذا لو أن بعض أحكامنا اليومية تتأثر بالخلفية
          أيضًا؟
        </p>
      </div>
    </>
  );
}

export function ChemistryExperiment({ onExplore }: { onExplore: () => void }) {
  const [ph, setPh] = useState(7);
  const colors = [
    "#ef7b99",
    "#ef7b99",
    "#ef7b99",
    "#c585d9",
    "#b590dd",
    "#aa94df",
    "#9b9ce9",
    "#929ce9",
    "#8aacdf",
    "#80bfce",
    "#76cbad",
    "#86c18f",
    "#b6ca7c",
    "#d2ce7d",
    "#d2ce7d",
  ];
  const color = colors[ph];
  const status = ph < 7 ? "حمضي" : ph > 7 ? "قاعدي" : "متعادل";
  return (
    <>
      <div
        className="experiment-stage chemistry-stage"
        style={{ "--liquid": color } as React.CSSProperties}
      >
        <div className="chem-orbit" />
        <div className="flask">
          <div className="flask-neck" />
          <div className="flask-body">
            <div className="liquid">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="flask-mark">
              {ph}
              <small>الرقم الهيدروجيني</small>
            </div>
          </div>
        </div>
        <span className="chem-status">{status}</span>
      </div>
      <div className="controls">
        <label htmlFor="ph">
          الرقم الهيدروجيني <span>{ph} / ١٤</span>
        </label>
        <input
          id="ph"
          aria-label="الرقم الهيدروجيني"
          type="range"
          min="0"
          max="14"
          step="1"
          value={ph}
          onChange={(e) => {
            setPh(+e.target.value);
            onExplore();
          }}
        />
        <div className="range-labels">
          <span>حمضي</span>
          <span>متعادل</span>
          <span>قاعدي</span>
        </div>
        <div className="control-row">
          <button
            onClick={() => {
              setPh(Math.max(0, ph - 1));
              onExplore();
            }}
            disabled={ph === 0}
          >
            قطرة حمضية
          </button>
          <button
            onClick={() => {
              setPh(Math.min(14, ph + 1));
              onExplore();
            }}
            disabled={ph === 14}
          >
            قطرة قاعدية
          </button>
          <Reset onClick={() => setPh(7)} />
        </div>
      </div>
      <div className="insight">
        <span>مختبر تخيّلي · لا وصفة منزلية</span>
        <h3>ليست الألوان زينة. إنها إشارات.</h3>
        <p>
          هذه محاكاة لونية تقريبية لمؤشر مستوحى من أنثوسيانين الملفوف الأحمر. قيمة أقل من ٧ حمضية، و٧
          متعادلة، وأعلى من ٧ قاعدية في الظروف المعتادة. الألوان الحقيقية تعتمد على التركيز والظروف؛
          الأزرار تغيّر القيمة مباشرة ولا تحاكي كميات كيميائية فعلية. لا تخلط مواد تنظيف أو مواد مجهولة.
        </p>
        <a
          href="https://www.acs.org/education/activities/red-cabbage-indicator.html"
          target="_blank"
          rel="noreferrer"
        >
          مرجع علمي: الجمعية الكيميائية الأمريكية <ArrowUpLeft size={15} />
        </a>
      </div>
    </>
  );
}

export function PhilosophyExperiment({ onExplore }: { onExplore: () => void }) {
  const [parts, setParts] = useState(0);
  const [choice, setChoice] = useState("");
  return (
    <>
      <div className="experiment-stage ship-stage">
        <div className="ship-moon" />
        <svg className="ship" viewBox="0 0 500 250" aria-label="سفينة تتغيّر ألواحها">
          <path d="M55 173h386l-50 51H105Z" fill="#292135" />
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              d={`M${70 + i * 44} 177h41l${i > 5 ? -15 : 0} 36h-36Z`}
              fill={i < parts ? "#d6b78f" : "#493c53"}
              stroke="#0d0b19"
              strokeWidth="3"
            />
          ))}
          <path d="M251 172V33" stroke="#948391" strokeWidth="5" />
          <path d="M241 50v105H132Z" fill="#c3b2c6" opacity=".65" />
          <path d="M264 58v98h111Z" fill="#726180" />
          <path d="M243 36h36l-12 10h-24Z" fill="#e0bda0" />
        </svg>
        <div className="water-line" />
        <p className="stage-caption">استُبدل {parts} من ٨ ألواح</p>
      </div>
      <div className="controls">
        <label htmlFor="parts">
          استبدل ألواح السفينة <span>{parts} / ٨</span>
        </label>
        <input
          id="parts"
          aria-label="عدد الألواح المستبدلة"
          type="range"
          min="0"
          max="8"
          value={parts}
          onChange={(e) => {
            setParts(+e.target.value);
            setChoice("");
            onExplore();
          }}
        />
        <p>حين تتغيّر الأجزاء، هل تبقى السفينة نفسها؟</p>
        <div className="choices">
          {["نعم، قصتها مستمرة", "لا، مادتها تغيّرت", "الهوية ليست شيئًا واحدًا"].map((c) => (
            <button
              key={c}
              aria-pressed={choice === c}
              className={choice === c ? "selected" : ""}
              onClick={() => {
                setChoice(c);
                onExplore();
              }}
            >
              {c}
              {choice === c && <Check size={15} />}
            </button>
          ))}
        </div>
        <Reset
          onClick={() => {
            setParts(0);
            setChoice("");
          }}
        />
      </div>
      <div className="insight" aria-live="polite">
        <span>تجربة فكرية مستوحاة من سفينة ثيسيوس</span>
        <h3>
          {choice === "نعم، قصتها مستمرة"
            ? "أنت تمنح الاستمرارية وزنًا أكبر."
            : choice === "لا، مادتها تغيّرت"
              ? "أنت تمنح المادة وزنًا أكبر."
              : choice
                ? "ربما الهوية علاقة، لا قطعة."
                : "السؤال الأجمل يأتي بعد اختيارك."}
        </h3>
        <p>
          {choice
            ? "والآن، لو جمعنا الألواح القديمة وبنينا منها سفينة ثانية، فأيهما الأصل؟ اختيارك هنا موقف في هذه الحكاية فقط، وليس تحليلًا لشخصيتك."
            : "أجسامنا وعاداتنا وذكرياتنا تتغيّر. هل يكفي الاسم لحفظ الهوية؟ أم القصة؟ جرّب تغيير الألواح، ثم انظر إلى ما تتمسّك به."}
        </p>
      </div>
    </>
  );
}

export function ReflectionExperiment({ onExplore }: { onExplore: () => void }) {
  const [note, setNote] = useState(() => readLocal("dody-reflection", ""));
  const [saved, setSaved] = useState("");
  const [mode, setMode] = useState("سماء");
  return (
    <>
      <div className="experiment-stage reflection-stage">
        <div className={`reflection-sky ${mode === "ليل" ? "dark-sky" : ""}`}>
          <div className="reflection-moon" />
          {Array.from({ length: 23 }, (_, i) => (
            <i key={i} style={{ left: `${(i * 37) % 97}%`, top: `${(i * 23) % 85}%` }} />
          ))}
          <div className="horizon" />
        </div>
        <blockquote>﴿ إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ ﴾</blockquote>
        <a href="https://quran.com/ar/ali-imran/190" target="_blank" rel="noreferrer">
          سورة آل عمران · الآية ١٩٠ <ArrowUpLeft size={14} />
        </a>
      </div>
      <div className="controls">
        <div className="control-row">
          <span>اختر نافذة لتأمّلك</span>
          {["سماء", "ليل"].map((m) => (
            <button
              key={m}
              className={mode === m ? "selected" : ""}
              aria-pressed={mode === m}
              onClick={() => {
                setMode(m);
                onExplore();
              }}
            >
              {m === "سماء" ? "اتّساع السماء" : "تعاقب الليل"}
            </button>
          ))}
        </div>
        <label htmlFor="reflection-note" className="journal-label">
          {mode === "سماء"
            ? "أيّ تفصيل في السماء مررت به دون أن تتوقّف؟"
            : "ما الذي يذكّرك به مجيء الليل بعد يوم مزدحم؟"}
        </label>
        <textarea
          id="reflection-note"
          aria-label="تأمّلك الخاص"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            setSaved("");
          }}
          placeholder="اكتب تأمّلك الخاص هنا…"
          rows={4}
        />
        <div className="control-row">
          <button
            className="primary-button"
            onClick={() => {
              setSaved(
                saveLocal("dody-reflection", note)
                  ? "حُفظ على هذا الجهاز فقط."
                  : "تعذّر الحفظ؛ يمكنك نسخ النص للاحتفاظ به.",
              );
              onExplore();
            }}
          >
            <Feather size={16} /> احفظ تأمّلك
          </button>
          <output className="save-status">
            {saved || "لا نرسل هذا النص إلى خادم."}
          </output>
        </div>
      </div>
      <div className="insight">
        <span>النص ومصدره، ثم مساحة للتأمّل</span>
        <h3>التفكّر يبدأ بالانتباه.</h3>
        <p>
          الأسئلة أعلاه دعوة شخصية للملاحظة، وليست تفسيرًا للآية. للاطّلاع على شرحها، اقرأ المصدر المرفق.
        </p>
        <a href="https://quran.com/ar/ali-imran/190/tafsirs" target="_blank" rel="noreferrer">
          اقرأ التفسير في منصة القرآن الكريم <ArrowUpLeft size={15} />
        </a>
        <details>
          <summary>حديث موثّق عن الشكر والصبر</summary>
          <p>
            قال رسول الله ﷺ: «عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ
            سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ».
          </p>
          <a href="https://sunnah.com/muslim:2999" target="_blank" rel="noreferrer">
            صحيح مسلم · ٢٩٩٩ · رواه صهيب <ArrowUpLeft size={15} />
          </a>
        </details>
      </div>
    </>
  );
}

export function BehaviorExperiment({ onExplore }: { onExplore: () => void }) {
  const [count, setCount] = useState(0);
  const [wait, setWait] = useState(0);
  const [begun, setBegun] = useState(false);
  useEffect(() => {
    if (!begun || count > 0) return;
    const timer = setInterval(() => setWait((v) => v + 1), 1000);
    return () => clearInterval(timer);
  }, [begun, count]);
  const messages = [
    "حسنًا… جرّب ألّا تضغطه.",
    "الزر بخير. فضولك هو الذي استيقظ.",
    "لم تظهر كارثة. ظهر ضغطٌ ثانٍ فقط.",
    "يبدو أن المنع يحتاج إلى زر آخر.",
    "وصلت إلى نهاية نكتة الزر. تستطيع التوقّف الآن.",
  ];
  return (
    <>
      <div className="experiment-stage behavior-stage">
        <span className="prohibited">الرجاء عدم الضغط</span>
        <div className="button-orbits" />
        <button
          className={`forbidden-button ${count ? "pressed" : ""}`}
          onClick={() => {
            setBegun(true);
            setCount((v) => v + 1);
            onExplore();
          }}
          aria-label="اضغط الزر الممنوع"
        >
          لا تضغط
        </button>
        <output className="stage-caption">
          {messages[Math.min(count, 4)]}
        </output>
      </div>
      <div className="controls">
        <div className="behavior-stats">
          <div>
            <strong>{count}</strong>
            <span>مرّات الضغط</span>
          </div>
          <div>
            <strong>{wait}</strong>
            <span>ثوانٍ قبل أول ضغطة</span>
          </div>
        </div>
        <div className="control-row">
          <button
            onClick={() => {
              setBegun(true);
              onExplore();
            }}
            disabled={begun}
          >
            ابدأ العدّ دون ضغط الزر
          </button>
          <Reset
            onClick={() => {
              setCount(0);
              setWait(0);
              setBegun(false);
            }}
          />
        </div>
      </div>
      <div className="insight">
        <span>لعبة ملاحظة · ليست اختبارًا نفسيًا</span>
        <h3>ربما لم تُرد الزر. أردت أن تعرف لماذا.</h3>
        <p>
          قد يجعل المنع الخيار أكثر حضورًا في ذهننا؛ لكن ضغطة واحدة لا تكشف دافعك. اسأل نفسك: هل ضغطت
          بدافع الفضول، أم رفض التعليمات، أم لأنك تختبر الموقع؟ كلّها احتمالات، لا تشخيصات. العدّ للتسلية
          فقط.
        </p>
      </div>
    </>
  );
}

export function MuseumExperiment({ onExplore }: { onExplore: () => void }) {
  const [object, setObject] = useState(0);
  const [turns, setTurns] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const names = ["بوصلة لا تشير إلى الشمال", "باب إلى لا مكان", "ساعة تنسى الوقت"];
  return (
    <>
      <div className="museum-tabs" aria-label="اختر قطعة">
        {names.map((name, i) => (
          <button
            key={name}
            aria-pressed={object === i}
            className={object === i ? "selected" : ""}
            onClick={() => {
              setObject(i);
              setTurns(0);
              setRevealed(false);
              onExplore();
            }}
          >
            <span>٠{i + 1}</span>
            {name}
          </button>
        ))}
      </div>
      <div className="experiment-stage museum-stage">
        {object === 0 ? (
          <div className="compass-object">
            <div className="compass-label top">احتمال</div>
            <div className="compass-label bottom">ذكرى</div>
            <div className="compass-label left">سؤال</div>
            <div className="compass-label right">دهشة</div>
            <Compass
              size={190}
              strokeWidth={0.65}
              style={{ transform: `rotate(${turns * 137}deg)` }}
            />
          </div>
        ) : object === 1 ? (
          <div className={`door-object ${revealed ? "open" : ""}`}>
            <div className="door-light" />
            <div className="door-panel">
              <i />
            </div>
          </div>
        ) : (
          <div className="clock-object">
            <span className="clock-center" />
            <i style={{ transform: `rotate(${turns * 73}deg)` }} />
            {["ربما", "لاحقًا", "الآن", "أمس"].map((s, i) => (
              <span key={s} className={`clock-word word-${i}`}>
                {s}
              </span>
            ))}
          </div>
        )}
        <p className="stage-caption" aria-live="polite">
          {object === 0
            ? turns
              ? [
                  "اتجاهك الجديد: نحو سؤال لم تسأله بعد.",
                  "اتجاهك الجديد: نحو ذكرى تستحق الزيارة.",
                  "اتجاهك الجديد: نحو دهشة صغيرة.",
                ][(turns - 1) % 3]
              : "ماذا لو كان الاتجاه شعورًا؟"
            : object === 1
              ? revealed
                ? "خلف الباب… مساحة لتخيّلك."
                : "ليست كل الأبواب تعد بمكان."
              : turns
                ? "الساعة تعرف الدوران. لا تعرف الموعد."
                : "هنا، الوقت كلمات لا أرقام."}
        </p>
      </div>
      <div className="controls">
        <div className="control-row">
          <button
            className="primary-button"
            onClick={() => {
              setTurns((t) => t + 1);
              setRevealed((r) => !r);
              onExplore();
            }}
          >
            {object === 0
              ? "دوّر البوصلة"
              : object === 1
                ? revealed
                  ? "أغلق الباب"
                  : "افتح الباب"
                : "حرّك الوقت"}{" "}
            <ArrowUpLeft size={17} />
          </button>
          <Reset
            onClick={() => {
              setTurns(0);
              setRevealed(false);
            }}
          />
        </div>
      </div>
      <div className="insight">
        <span>بطاقة القطعة · ٠{object + 1}</span>
        <h3>{names[object]}</h3>
        <p>
          {object === 0
            ? "صُنعت لمن يعرف أين يذهب، لكنه نسي لماذا. لا تقدّم هذه البوصلة إرشادًا حقيقيًا؛ إنها تسأل فقط: ما الذي تريد أن تقترب منه اليوم؟"
            : object === 1
              ? "باب بلا غرفة أخرى. أحيانًا لا نحتاج مكانًا جديدًا، بل طريقة مختلفة للنظر إلى المكان نفسه. ماذا كنت تتمنّى أن تجد خلفه؟"
              : "ساعة لم يُطلب منها الوصول في موعد. إذا كان يومك يُقاس بالأحداث لا بالدقائق، فما اللحظة التي تريد أن تمنحها وقتًا أطول؟"}
        </p>
      </div>
    </>
  );
}
