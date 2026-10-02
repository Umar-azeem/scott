"use client";

import {
  Handshake,
  Newspaper,
  Workflow,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

interface CardData {
  icon: LucideIcon;
  label: string;
  bg: string;
  textColor: string;
  iconBg: string;
}

const cards: CardData[] = [
  {
    icon: Handshake,
    label: "Common\nIndustries",
    bg: "#0F6D69",
    textColor: "text-white",
    iconBg: "bg-white/15",
  },
  {
    icon: Newspaper,
    label: "Our\nBlog",
    bg: "#EEDBCC",
    textColor: "text-[#5B4636]",
    iconBg: "bg-[#0F6D69]/15",
  },
  {
    icon: Workflow,
    label: "How\nIt Works",
    bg: "#CFBDB1",
    textColor: "text-[#5B4636]",
    iconBg: "bg-white/30",
  },
  {
    icon: HelpCircle,
    label: "Frequently\nAsked ",
    bg: "#EAD9CD",
    textColor: "text-[#5B4636]",
    iconBg: "bg-[#0F6D69]/15",
  },
];

export default function Cards() {
  return (
    <section className="">
      <div className="mx-auto max-w-2xl ">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href="#"
                className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: card.bg }}
              >
                <span
                  className={`flex size-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:size-20 ${card.iconBg}`}
                >
                  <Icon
                    className={`size-8 sm:size-9 ${card.textColor}`}
                    strokeWidth={1.75}
                  />
                </span>
                <p
                  className={`whitespace-pre-line text-sm font-bold uppercase leading-tight tracking-wide sm:text-base ${card.textColor}`}
                >
                  {card.label}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
