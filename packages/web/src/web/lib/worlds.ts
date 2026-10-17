export const worlds = [
  {
    slug: "mind",
    title: "تجارب العقل",
    ko: "마음의 실험실",
    subtitle: "هل ترى بعينيك، أم بتوقعاتك؟",
    intro:
      "شيئان متطابقان. عالمٌ مختلف حول كلٍّ منهما. حرّك الخلفية، وراقب كيف يكتب عقلك نسخته من الحقيقة.",
    topic: "الضوء الذي يخدعنا",
    id: "mind-001",
    color: "#a6c5f1",
    koDescription: "당연했던 감각을 다시 바라보는 곳",
    number: "01",
  },
  {
    slug: "chemistry",
    title: "كيمياء تفاعلية",
    ko: "작은 화학의 우주",
    subtitle: "قطرة واحدة تغيّر المشهد.",
    intro:
      "مختبر صغير بلا مواد حقيقية. استكشف كيف يتبدّل لون مؤشر افتراضي عندما يتغيّر الرقم الهيدروجيني.",
    topic: "رسالة بلون قطرة",
    id: "chemistry-001",
    color: "#9dd9cb",
    koDescription: "한 방울에서 시작되는 새로운 발견",
    number: "02",
  },
  {
    slug: "philosophy",
    title: "الفلسفة",
    ko: "생각의 갈림길",
    subtitle: "إذا تغيّر كل شيء، فما الذي يبقى؟",
    intro:
      "هذه ليست مسابقة للإجابة الصحيحة. إنها سفينة صغيرة، وسؤال كبير عن الهوية. غيّر أجزاءها، ثم اختر ما تعنيه لك.",
    topic: "سفينة الذاكرة",
    id: "philosophy-001",
    color: "#e5bf95",
    koDescription: "정답보다 아름다운 질문을 만나는 곳",
    number: "03",
  },
  {
    slug: "reflection",
    title: "تأملات إيمانية",
    ko: "고요한 성찰",
    subtitle: "في التفاصيل الصغيرة، متّسع للتفكّر.",
    intro:
      "وقفة هادئة مع آية، ثم سؤال شخصي. النص الشرعي موثّق؛ وما تكتب هنا هو تأمّلك الخاص، لا تفسير ولا فتوى.",
    topic: "نافذة للتفكّر",
    id: "reflection-001",
    color: "#dbd19e",
    koDescription: "잠시 멈추고 깊이 생각하는 시간",
    number: "04",
  },
  {
    slug: "behavior",
    title: "غرائب السلوك البشري",
    ko: "이상하고 귀여운 인간",
    subtitle: "لماذا نريد ضغط الزر الممنوع؟",
    intro:
      "تجربة مرحة في الفضول. لا قياس للشخصية، ولا حكم عليك. فقط زر، وتعليمات، ومسافة صغيرة بينهما.",
    topic: "الزر الذي لا يُضغط",
    id: "behavior-001",
    color: "#efaac1",
    koDescription: "우리의 엉뚱함을 웃으며 발견하는 곳",
    number: "05",
  },
  {
    slug: "museum",
    title: "متحف الأشياء الغريبة",
    ko: "기묘한 물건의 박물관",
    subtitle: "هنا، للأشياء أفكارها الخاصة.",
    intro:
      "ثلاث قطع لا تصلح لشيء عملي تقريبًا. لكن كل واحدة تعرف كيف تجعل السؤال أكثر غرابة. اختر قطعة وتفاعل معها.",
    topic: "أشياء على حافة المنطق",
    id: "museum-001",
    color: "#c9a9f1",
    koDescription: "쓸모없어서 더 특별한 물건들",
    number: "06",
  },
] as const;
export type World = (typeof worlds)[number];
export function readLocal(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
export function saveLocal(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
