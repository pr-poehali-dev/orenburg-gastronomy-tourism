import Icon from "@/components/ui/icon";
import { SlideLayout, STEPPE_IMG } from "./SlideLayout";

/* ─────────────────────────── SLIDE 6: DISHES ─────────────────────────── */
export function DishesSlide() {
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
export function DelicaciesSlide() {
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
export function EventsSlide() {
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
export function ProspectsSlide() {
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
export function ConclusionSlide() {
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
