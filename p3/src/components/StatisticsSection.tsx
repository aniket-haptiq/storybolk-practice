"use client";
import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import { StatItem, StatProps } from "@/types/storyblok";

const StatisticsSection = ({ blok }: StatProps) => {
   
if (!blok) return null;

  const { headline, description, stats, background_color, font_color } = blok;

  return (
<section
  className="py-16"
  style={{ backgroundColor: background_color?.color }}
  {...storyblokEditable(blok)}
>
  <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">

    <div className="md:col-span-2 text-left">
      <h2
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: font_color?.color }}
      >
        {headline}
      </h2>
      <p
        className="text-sm md:text-base"
        style={{ color: font_color?.color }}
      >
        {description}
      </p>
    </div>

    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
      {stats?.map((stat: StatItem) => (
        <Counter
          key={stat._uid}
          stat={stat}
          fontColor={font_color?.color}
        />
      ))}
    </div>
  </div>
</section>

  );
};

//Counter for Display Statistics Section
const Counter = ({
  stat,
  fontColor,
}: {
  stat: StatItem;
  fontColor?: string;
}) => {
  const { value, suffix, label } = stat;
  const [count, setCount] = useState(0);
  const end = parseInt(value, 10);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <p className="text-5xl sm:text-6xl md:text-7xl font-semibold" style={{ color: fontColor }}>
        {count}
        {suffix || ""}
      </p>
      <p className="text-sm md:text-base mt-2" style={{ color: fontColor }}>
        {label}
      </p>
    </div>
  );
};

export default StatisticsSection;
