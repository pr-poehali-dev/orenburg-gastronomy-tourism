import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { TitleSlide, IntroSlide, EcologySlide, RoutesSlide, GastroSlide } from "@/components/slides/SlidesNature";
import { DishesSlide, DelicaciesSlide, EventsSlide, ProspectsSlide, ConclusionSlide } from "@/components/slides/SlidesFood";

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
