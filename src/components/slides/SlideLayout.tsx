import React from "react";

export const STEPPE_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/860a8bc7-eb3d-4c82-9cda-785c8bc19540.jpg";
export const FOOD_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/8e7187ee-1d78-4009-bd76-38ba1fcdc766.jpg";
export const FOREST_IMG = "https://cdn.poehali.dev/projects/647c8b9d-7270-4e7f-bb67-6360b48476ce/files/2397c454-ab1c-484b-8d26-22a488d19976.jpg";

export type AccentColor = "green" | "terracotta" | "brown";

export function SlideLayout({ number, label, title, accent, children }: {
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
