import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const STEPPE_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/860a8bc7-eb3d-4c82-9cda-785c8bc19540.jpg";
const FOOD_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/8e7187ee-1d78-4009-bd76-38ba1fcdc766.jpg";
const FOREST_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/2397c454-ab1c-484b-8d26-22a488d19976.jpg";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "intro" },
  { id: 3, type: "ecology" },
  { id: 4, type: "routes" },
  { id: 5, type: "gastro" },
  { id: 6, type: "dishes" },
  { id: 7, type: "delicacies" },
  { id: 8, type: "events" },
  { id: 9, type: "prospects" },
  { id: 10, type: "conclusion" },
];

const slideLabels: Record<string, string> = {
  title: "Титул",
  intro: "Введение",
  ecology: "Экотуризм",
  routes: "Маршруты",
  gastro: "Гастрономия",
  dishes: "Блюда",
  delicacies: "Деликатесы",
  events: "Фестивали",
  prospects: "Перспективы",
  conclusion: "Итог",
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = () => { if (current > 0) goTo(current - 1); };
  const next = () => { if (current < slides.length - 1) goTo(current + 1); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
        setAnimKey((k) => k + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrent((c) => Math.max(c - 1, 0));
        setAnimKey((k) => k + 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const slide = slides[current];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col" style={{ backgroundColor: "var(--earth-beige)", fontFamily: "'Golos Text', sans-serif" }}>
      {/* Nav dots */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            title={slideLabels[s.type]}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "10px",
              height: "10px",
              backgroundColor: i === current ? "var(--earth-terracotta)" : "var(--earth-brown)",
              opacity: i === current ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      {/* Slide content */}
      <div key={animKey} className="flex-1 overflow-hidden slide-enter">
        {slide.type === "title" && <TitleSlide />}
        {slide.type === "intro" && <IntroSlide />}
        {slide.type === "ecology" && <EcologySlide />}
        {slide.type === "routes" && <RoutesSlide />}
        {slide.type === "gastro" && <GastroSlide />}
        {slide.type === "dishes" && <DishesSlide />}
        {slide.type === "delicacies" && <DelicaciesSlide />}
        {slide.type === "events" && <EventsSlide />}
        {slide.type === "prospects" && <ProspectsSlide />}
        {slide.type === "conclusion" && <ConclusionSlide />}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
          style={{ backgroundColor: "var(--earth-brown)", color: "var(--earth-cream)" }}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <span className="font-body text-sm" style={{ color: "var(--earth-brown)" }}>
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
          style={{ backgroundColor: "var(--earth-brown)", color: "var(--earth-cream)" }}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────── SLIDE 1: TITLE ─────────────────────────── */
function TitleSlide() {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      <img src={STEPPE_IMG} alt="Степи Оренбуржья" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(58,37,21,0.85) 0%, rgba(45,90,61,0.6) 100%)" }} />
      <div className="absolute inset-6 border opacity-30 rounded-sm pointer-events-none" style={{ borderColor: "var(--earth-sand)" }} />
      <div className="absolute inset-8 border opacity-15 rounded-sm pointer-events-none" style={{ borderColor: "var(--earth-sand)" }} />

      <div className="relative z-10 text-center px-12 max-w-5xl">
        <div className="fade-up stagger-1 inline-block mb-6 px-5 py-1.5 rounded-full text-sm font-body font-medium tracking-widest uppercase"
          style={{ backgroundColor: "rgba(184,92,42,0.8)", color: "var(--earth-cream)" }}>
          Туристический потенциал региона
        </div>
        <h1 className="fade-up stagger-2 font-display text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.4)", fontFamily: "'Cormorant', serif" }}>
          Оренбуржье
        </h1>
        <div className="fade-up stagger-3 w-24 h-0.5 mx-auto mb-5" style={{ backgroundColor: "var(--earth-terracotta)" }} />
        <p className="fade-up stagger-4 text-white/90 leading-relaxed italic"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontFamily: "'Cormorant', serif", textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}>
          Потенциал гастрономического<br />и экологического туризма
        </p>
        <p className="fade-up stagger-5 mt-4 font-body text-white/70 text-sm tracking-wide">
          Богатое природное, историческое и культурное наследие региона
        </p>
        <div className="fade-up stagger-5 mt-10 flex justify-center gap-6">
          {["🌿 Природа", "🍽 Гастрономия", "🏛 История"].map((tag) => (
            <div key={tag} className="font-body text-sm px-4 py-2 rounded-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "var(--earth-sand)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-12 left-12 w-12 h-12 opacity-40" style={{ borderTop: "2px solid var(--earth-sand)", borderLeft: "2px solid var(--earth-sand)" }} />
      <div className="absolute bottom-16 right-12 w-12 h-12 opacity-40" style={{ borderBottom: "2px solid var(--earth-sand)", borderRight: "2px solid var(--earth-sand)" }} />
    </div>
  );
}

/* ─────────────────────────── SLIDE 2: INTRO ─────────────────────────── */
function IntroSlide() {
  const points = [
    { icon: "MapPin" as const, text: "Стратегическое расположение на границе Европы и Азии" },
    { icon: "Trees" as const, text: "Уникальное сочетание степных, лесных и водных экосистем" },
    { icon: "Users" as const, text: "Многонациональное население: русские, татары, башкиры, казахи" },
    { icon: "Landmark" as const, text: "Богатое историческое наследие: казачьи традиции, Великий шёлковый путь" },
    { icon: "TrendingUp" as const, text: "Растущая туристическая инфраструктура" },
  ];
  return (
    <SlideLayout number="02" label="Введение" title="Почему Оренбуржье?" accent="green">
      <div className="grid grid-cols-1 gap-3 mt-2">
        {points.map((p, i) => (
          <div key={i} className={`fade-up stagger-${i + 1} flex items-start gap-4 p-4 rounded-xl`}
            style={{ backgroundColor: "rgba(45,90,61,0.08)", border: "1px solid rgba(45,90,61,0.15)" }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "var(--earth-green)", color: "var(--earth-cream)" }}>
              <Icon name={p.icon} size={16} />
            </div>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--earth-dark)" }}>{p.text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* ─────────────────────────── SLIDE 3: ECOLOGY ─────────────────────────── */
function EcologySlide() {
  const objects = [
    { name: "Оренбургский заповедник", desc: "Таловская степь, Буртинская степь, Предуральская степь — эталон нетронутой степи", emoji: "🌾" },
    { name: "Бузулукский бор", desc: "Уникальный сосновый массив возрастом более 6 000 лет", emoji: "🌲" },
    { name: "Ириклинское водохранилище", desc: "Крупнейшее в области — место для рыбалки и отдыха", emoji: "💧" },
    { name: "Солёные озёра Развал и Тузлучное", desc: "Лечебные грязи и рапа", emoji: "🧂" },
    { name: "Красные скалы и Шайтан Тау", desc: "Живописные ландшафты для трекинга", emoji: "⛰️" },
  ];
  return (
    <div className="h-full flex overflow-hidden">
      <div className="w-2/5 relative flex-shrink-0">
        <img src={FOREST_IMG} alt="Природа Оренбуржья" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(45,90,61,0.75) 0%, transparent 100%)" }} />
        <div className="absolute bottom-16 left-0 right-0 p-8">
          <div className="font-body text-xs uppercase tracking-widest font-semibold mb-2 opacity-80" style={{ color: "var(--earth-sand)" }}>Экологический туризм</div>
          <div style={{ fontFamily: "'Cormorant', serif", fontSize: "2.5rem", color: "white", lineHeight: 1.1 }}>
            Природные<br />богатства
          </div>
        </div>
        <div className="absolute top-8 left-8" style={{ fontFamily: "'Cormorant', serif", fontSize: "5rem", color: "white", opacity: 0.2 }}>03</div>
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center overflow-y-auto" style={{ backgroundColor: "var(--earth-cream)" }}>
        <h2 className="font-body font-semibold text-xl mb-5" style={{ color: "var(--earth-dark)" }}>Ключевые природные объекты</h2>
        <div className="flex flex-col gap-3">
          {objects.map((obj, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} flex gap-3 p-4 rounded-xl`}
              style={{ backgroundColor: i % 2 === 0 ? "rgba(45,90,61,0.06)" : "rgba(212,196,160,0.3)", border: "1px solid rgba(45,90,61,0.12)" }}>
              <div className="text-2xl flex-shrink-0">{obj.emoji}</div>
              <div>
                <div className="font-body font-semibold text-sm mb-0.5" style={{ color: "var(--earth-green)" }}>{obj.name}</div>
                <div className="font-body text-xs leading-snug" style={{ color: "var(--earth-brown)" }}>{obj.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── SLIDE 4: ROUTES ─────────────────────────── */
function RoutesSlide() {
  const routes = [
    { icon: "Footprints" as const, title: "Пешие и конные маршруты", desc: "По заповедным степям", color: "var(--earth-green)" },
    { icon: "Bike" as const, title: "Велотуры", desc: "Вдоль рек Урал и Сакмара", color: "var(--earth-terracotta)" },
    { icon: "Bird" as const, title: "Орнитологические туры", desc: "Наблюдение за птицами в период миграции", color: "var(--earth-green-light)" },
    { icon: "Tent" as const, title: "Кемпинг и глэмпинг", desc: "В Бузулукском бору", color: "var(--earth-brown)" },
    { icon: "BookOpen" as const, title: "Экопросвещение", desc: "Экскурсии в визит-центрах заповедника", color: "var(--earth-orange)" },
  ];
  return (
    <SlideLayout number="04" label="Маршруты" title="Экомаршруты и активности" accent="green">
      <div className="grid grid-cols-2 gap-4 mt-3 lg:grid-cols-3">
        {routes.map((r, i) => (
          <div key={i} className={`fade-up stagger-${i + 1} p-5 rounded-2xl flex flex-col gap-3`}
            style={{ backgroundColor: "white", boxShadow: "0 2px 16px rgba(58,37,21,0.08)", border: "1px solid rgba(212,196,160,0.5)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: r.color + "22" }}>
              <Icon name={r.icon} size={20} style={{ color: r.color }} />
            </div>
            <div>
              <div className="font-body font-semibold text-sm mb-1" style={{ color: "var(--earth-dark)" }}>{r.title}</div>
              <div className="font-body text-xs leading-snug" style={{ color: "var(--earth-brown)" }}>{r.desc}</div>
            </div>
          </div>
        ))}
        <div className="fade-up stagger-5 p-5 rounded-2xl flex flex-col justify-center items-center"
          style={{ background: "linear-gradient(135deg, var(--earth-green) 0%, var(--earth-green-light) 100%)", color: "var(--earth-cream)" }}>
          <div style={{ fontFamily: "'Cormorant', serif", fontSize: "4rem", fontWeight: 300, lineHeight: 1 }}>5</div>
          <div className="font-body text-xs text-center opacity-90 mt-1">популярных<br />направлений</div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ─────────────────────────── SLIDE 5: GASTRO ─────────────────────────── */
function GastroSlide() {
  const traditions = [
    { culture: "Казачья", items: ["Похлёбки и пироги", "Запечённое мясо"], color: "var(--earth-terracotta)" },
    { culture: "Татарская", items: ["Лепёшки на каймаке", "Балыш"], color: "var(--earth-green)" },
    { culture: "Башкирская", items: ["Вяленое мясо", "Молочные продукты"], color: "var(--earth-brown)" },
    { culture: "Казахская", items: ["Бесбармак", "Кочевые угощения"], color: "var(--earth-orange)" },
  ];
  return (
    <div className="h-full flex overflow-hidden">
      <div className="flex-1 p-10 flex flex-col justify-center" style={{ backgroundColor: "var(--earth-cream)" }}>
        <div className="mb-1 font-body text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--earth-terracotta)" }}>Гастрономический туризм</div>
        <h2 className="font-body font-semibold text-2xl mb-3" style={{ color: "var(--earth-dark)" }}>Традиции региона</h2>
        <p className="font-body text-sm mb-6 leading-relaxed" style={{ color: "var(--earth-brown)" }}>
          Кухня Оренбуржья — уникальный синтез нескольких великих культур. Каждая привнесла свои вкусы и техники.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {traditions.map((t, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} p-4 rounded-xl`}
              style={{ borderLeft: `3px solid ${t.color}`, backgroundColor: "white", boxShadow: "0 2px 10px rgba(58,37,21,0.06)" }}>
              <div className="font-body font-semibold text-sm mb-2" style={{ color: t.color }}>{t.culture} традиция</div>
              {t.items.map((item, j) => (
                <div key={j} className="font-body text-xs flex items-center gap-1.5 mb-1" style={{ color: "var(--earth-dark)" }}>
                  <span style={{ color: t.color }}>·</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-xl fade-up stagger-5"
          style={{ backgroundColor: "rgba(184,92,42,0.08)", border: "1px solid rgba(184,92,42,0.2)" }}>
          <p className="font-body text-xs text-center italic" style={{ color: "var(--earth-terracotta)" }}>
            Местные продукты: арбузы, тыква, мясо, молочные изделия — основа региональной кухни
          </p>
        </div>
      </div>
      <div className="w-2/5 relative flex-shrink-0">
        <img src={FOOD_IMG} alt="Блюда Оренбуржья" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(58,37,21,0.5) 0%, transparent 60%)" }} />
        <div className="absolute top-8 right-8" style={{ fontFamily: "'Cormorant', serif", fontSize: "5rem", color: "white", opacity: 0.25 }}>05</div>
      </div>
    </div>
  );
}

/* ─────────────────────────── SLIDE 6: DISHES ─────────────────────────── */
function DishesSlide() {
  const dishes = [
    { num: "01", name: "Веера из картофеля", desc: "Казачье блюдо с надрезами и запечённым салом", emoji: "🥔" },
    { num: "02", name: "Руб", desc: "Холодная похлёбка из солёного арбуза и овощей", emoji: "🍉" },
    { num: "03", name: "Пельмени из трёх мяс", desc: "Говядина, свинина и баранина — фирменный рецепт", emoji: "🥟" },
    { num: "04", name: "Яфаровская жайма", desc: "Сладкая лепёшка на каймаке", emoji: "🫓" },
    { num: "05", name: "Орские пирожки", desc: "Обжаренные во фритюре рулетики с ливером", emoji: "🫔" },
  ];
  return (
    <SlideLayout number="06" label="Знаковые блюда" title="Топ-5 блюд Оренбуржья" accent="terracotta">
      <div className="flex flex-col gap-3 mt-2">
        {dishes.map((d, i) => (
          <div key={i} className={`fade-up stagger-${i + 1} flex items-center gap-4 p-4 rounded-2xl`}
            style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(58,37,21,0.07)", border: "1px solid rgba(212,196,160,0.4)" }}>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: "2.2rem", color: "var(--earth-sand)", width: "40px", flexShrink: 0 }}>{d.num}</div>
            <div className="text-3xl flex-shrink-0">{d.emoji}</div>
            <div className="flex-1">
              <div className="font-body font-semibold text-sm" style={{ color: "var(--earth-dark)" }}>{d.name}</div>
              <div className="font-body text-xs mt-0.5 leading-snug" style={{ color: "var(--earth-brown)" }}>{d.desc}</div>
            </div>
            <div className="w-1.5 h-8 rounded-full flex-shrink-0"
              style={{ backgroundColor: i % 2 === 0 ? "var(--earth-terracotta)" : "var(--earth-green)" }} />
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* ─────────────────────────── SLIDE 7: DELICACIES ─────────────────────────── */
function DelicaciesSlide() {
  const items = [
    { name: "Бузулукский сыр", desc: "Экологически чистый продукт", emoji: "🧀" },
    { name: "Арбузные чипсы", desc: "Фирменный сувенир из Соль-Илецка", emoji: "🍉" },
    { name: "Тыквенное повидло", desc: "Традиционный десерт региона", emoji: "🎃" },
    { name: "Каймак", desc: "Местный молочный продукт, аналог сметаны", emoji: "🥛" },
    { name: "Оренбургские пряники", desc: "Расписные сладости", emoji: "🍪" },
  ];
  return (
    <SlideLayout number="07" label="Деликатесы" title="Что привезти из Оренбуржья" accent="brown">
      <div className="grid grid-cols-5 gap-4 mt-4">
        {items.map((item, i) => (
          <div key={i} className={`fade-up stagger-${i + 1} flex flex-col items-center text-center p-5 rounded-2xl`}
            style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(58,37,21,0.08)", border: "1px solid rgba(212,196,160,0.5)" }}>
            <div className="text-4xl mb-3">{item.emoji}</div>
            <div className="font-body font-semibold text-xs mb-1.5 leading-tight" style={{ color: "var(--earth-dark)" }}>{item.name}</div>
            <div className="font-body text-xs leading-snug" style={{ color: "var(--earth-brown)" }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 p-5 rounded-2xl fade-up stagger-5"
        style={{ background: "linear-gradient(135deg, var(--earth-terracotta) 0%, var(--earth-orange) 100%)", color: "var(--earth-cream)" }}>
        <div className="flex items-center gap-3">
          <Icon name="ShoppingBag" size={24} style={{ opacity: 0.9 }} />
          <p className="font-body text-sm">Все продукты доступны на местных ярмарках и фестивале «Вкусы Оренбуржья»</p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ─────────────────────────── SLIDE 8: EVENTS ─────────────────────────── */
function EventsSlide() {
  const events = [
    { icon: "Calendar" as const, text: "Ежегодное мероприятие в Оренбурге" },
    { icon: "UtensilsCrossed" as const, text: "Дегустация бердского пирога, орских паштетов, татарского балыша" },
    { icon: "ChefHat" as const, text: "Мастер-классы: шулюм, плов, мясо по-сарматски" },
    { icon: "Sparkles" as const, text: "Арбузные чипсы и огуречный смузи — необычные локальные хиты" },
    { icon: "Store" as const, text: "Фотозоны и ярмарка местных производителей" },
  ];
  return (
    <div className="h-full flex overflow-hidden">
      <div className="w-5/12 relative flex-shrink-0 flex flex-col justify-end p-10"
        style={{ background: "linear-gradient(160deg, var(--earth-green) 0%, var(--earth-dark) 100%)" }}>
        <div className="absolute top-8 left-8" style={{ fontFamily: "'Cormorant', serif", fontSize: "5rem", color: "white", opacity: 0.15 }}>08</div>
        <div className="relative z-10">
          <div className="font-body text-xs uppercase tracking-widest font-semibold mb-3 opacity-70" style={{ color: "var(--earth-sand)" }}>Гастрономические события</div>
          <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "2.8rem", fontWeight: 600, color: "white", lineHeight: 1.1 }} className="mb-4">
            Фестиваль<br />«Вкусы<br />Оренбуржья»
          </h2>
          <div className="flex gap-2 flex-wrap">
            {["🌟 Ежегодно", "🍽 Дегустации", "🎪 Ярмарка"].map((tag) => (
              <span key={tag} className="font-body text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "var(--earth-sand)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center" style={{ backgroundColor: "var(--earth-cream)" }}>
        <div className="flex flex-col gap-4">
          {events.map((e, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} flex items-start gap-4`}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--earth-terracotta)", color: "white" }}>
                <Icon name={e.icon} size={16} />
              </div>
              <p className="font-body text-sm leading-relaxed pt-1.5" style={{ color: "var(--earth-dark)" }}>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── SLIDE 9: PROSPECTS ─────────────────────────── */
function ProspectsSlide() {
  const items = [
    { icon: "Route" as const, title: "Гастрономические маршруты", desc: "Фермы → рестораны → фестивали", color: "var(--earth-terracotta)" },
    { icon: "Trees" as const, title: "Развитие экотуризма", desc: "Тропы, глэмпинги, визит-центры", color: "var(--earth-green)" },
    { icon: "Award" as const, title: "Продвижение брендов", desc: "Соль-Илецкий арбуз, Бузулукский сыр", color: "var(--earth-orange)" },
    { icon: "Handshake" as const, title: "Сотрудничество", desc: "Пакетные туры с операторами", color: "var(--earth-brown)" },
    { icon: "Smartphone" as const, title: "Цифровизация", desc: "Мобильные гиды по экотропам и ресторанам", color: "var(--earth-green-light)" },
  ];
  return (
    <SlideLayout number="09" label="Перспективы" title="Возможности для роста" accent="green">
      <div className="grid grid-cols-3 gap-4 mt-3">
        {items.map((item, i) => (
          <div key={i} className={`fade-up stagger-${i + 1} p-5 rounded-2xl`}
            style={{ backgroundColor: "white", boxShadow: "0 2px 16px rgba(58,37,21,0.07)", borderTop: `3px solid ${item.color}` }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: item.color + "18" }}>
              <Icon name={item.icon} size={16} style={{ color: item.color }} />
            </div>
            <div className="font-body font-semibold text-sm mb-1.5" style={{ color: "var(--earth-dark)" }}>{item.title}</div>
            <div className="font-body text-xs leading-snug" style={{ color: "var(--earth-brown)" }}>{item.desc}</div>
          </div>
        ))}
        <div className="fade-up stagger-5 p-5 rounded-2xl flex flex-col items-center justify-center text-center"
          style={{ background: "linear-gradient(135deg, var(--earth-terracotta), var(--earth-orange))", color: "white" }}>
          <Icon name="Rocket" size={28} className="mb-2 opacity-90" />
          <div style={{ fontFamily: "'Cormorant', serif", fontSize: "1.3rem", fontWeight: 600 }}>Оренбуржье</div>
          <div className="font-body text-xs opacity-80 mt-1">в ТОП туристических<br />регионов России</div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ─────────────────────────── SLIDE 10: CONCLUSION ─────────────────────────── */
function ConclusionSlide() {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      <img src={STEPPE_IMG} alt="Оренбуржье" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(45,90,61,0.88) 0%, rgba(58,37,21,0.75) 100%)" }} />
      <div className="absolute inset-6 border opacity-20 rounded-sm pointer-events-none" style={{ borderColor: "var(--earth-sand)" }} />

      <div className="relative z-10 max-w-5xl w-full px-12">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="fade-up stagger-1 font-body text-xs uppercase tracking-widest font-semibold mb-4 opacity-80" style={{ color: "var(--earth-sand)" }}>10 / Заключение</div>
            <h2 className="fade-up stagger-2 text-white leading-tight mb-5"
              style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Оренбуржье ждёт<br />своих гостей
            </h2>
            <div className="fade-up stagger-3 w-16 h-0.5 mb-5" style={{ backgroundColor: "var(--earth-terracotta)" }} />
            <p className="fade-up stagger-4 font-body text-white/85 text-sm leading-relaxed">
              Регион с уникальным сочетанием нетронутой природы, самобытной кухни и богатой истории для любознательных путешественников.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {([
              { icon: "Leaf" as const, label: "Нетронутая природа", sub: "Для экотуристов" },
              { icon: "UtensilsCrossed" as const, label: "Самобытная кухня", sub: "Для гурманов" },
              { icon: "BookOpen" as const, label: "Богатая история", sub: "Для путешественников" },
            ]).map((item, i) => (
              <div key={i} className={`fade-up stagger-${i + 2} flex items-center gap-4 p-4 rounded-xl`}
                style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--earth-terracotta)", color: "white" }}>
                  <Icon name={item.icon} size={18} />
                </div>
                <div>
                  <div className="font-body font-semibold text-white text-sm">{item.label}</div>
                  <div className="font-body text-white/60 text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
            <div className="fade-up stagger-5 mt-1 p-4 rounded-xl text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <div className="font-body text-xs text-white/70 mb-1">Туристический портал</div>
              <div className="font-body font-semibold text-white text-sm">VisitOrenburg.ru</div>
              <div className="font-body text-xs text-white/60 mt-1">Туристические информационные центры</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-12 left-12 w-12 h-12 opacity-30" style={{ borderTop: "2px solid var(--earth-sand)", borderLeft: "2px solid var(--earth-sand)" }} />
      <div className="absolute bottom-16 right-12 w-12 h-12 opacity-30" style={{ borderBottom: "2px solid var(--earth-sand)", borderRight: "2px solid var(--earth-sand)" }} />
    </div>
  );
}

/* ─────────────────────────── LAYOUT HELPER ─────────────────────────── */
type AccentColor = "green" | "terracotta" | "brown";

function SlideLayout({ number, label, title, accent, children }: {
  number: string;
  label: string;
  title: string;
  accent: AccentColor;
  children: React.ReactNode;
}) {
  const accentMap: Record<AccentColor, string> = {
    green: "var(--earth-green)",
    terracotta: "var(--earth-terracotta)",
    brown: "var(--earth-brown)",
  };
  const color = accentMap[accent];

  return (
    <div className="h-full flex overflow-hidden" style={{ backgroundColor: "var(--earth-cream)" }}>
      <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
      <div className="flex-1 px-10 py-8 flex flex-col overflow-hidden">
        <div className="flex items-baseline gap-4 mb-5">
          <span style={{ fontFamily: "'Cormorant', serif", fontSize: "5rem", fontWeight: 300, color: "var(--earth-sand)", lineHeight: 1 }}>{number}</span>
          <div>
            <div className="font-body text-xs uppercase tracking-widest font-semibold" style={{ color }}>{label}</div>
            <h2 className="font-body font-semibold text-2xl" style={{ color: "var(--earth-dark)" }}>{title}</h2>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pr-1">{children}</div>
      </div>
    </div>
  );
}