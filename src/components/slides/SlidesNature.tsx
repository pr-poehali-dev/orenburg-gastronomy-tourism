import Icon from "@/components/ui/icon";
import { SlideLayout, STEPPE_IMG, FOREST_IMG, FOOD_IMG } from "./SlideLayout";

/* ─────────────────────────── SLIDE 1: TITLE ─────────────────────────── */
export function TitleSlide() {
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
export function IntroSlide() {
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
export function EcologySlide() {
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
export function RoutesSlide() {
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
export function GastroSlide() {
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
