"use client";

// this is being used on the liveforbundet page

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const formatHeroDate = (eventDate) => {
  if (!eventDate) return "";

  const date = new Date(`${eventDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return eventDate;
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const currentYear = new Date().getFullYear();

  return year === currentYear
    ? `${day}. ${month}`
    : `${day}. ${month}. ${year}`;
};

const HeroHeader = ({ heroEvents = [], type }) => {
  const slides = useMemo(
    () => heroEvents.filter((event) => event?.event_img),
    [heroEvents],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const heroEvent = slides[activeIndex];

  return (
    <SectionWrapper
      padding="py-0"
      innerClass="relative w-full"
      gridPosition="col-[main]"
    >
      <Link href={`/event/${heroEvent.id}`}>
        <div className="relative h-90 w-full overflow-hidden md:ml-auto md:h-107.5 md:w-[78%]">
          <Image
            src={heroEvent.event_img}
            alt={heroEvent.event_name}
            fill
            className="object-cover mix-blend-luminosity"
          />
        </div>

        {/* infobox */}
        <div className="absolute right-0 -bottom-4 left-auto flex justify-end pr-4 md:inset-y-0 md:right-auto md:bottom-0 md:left-0 md:items-center md:justify-start md:pr-0">
          <div className="liveforbundet-surface z-10 w-[60vw] max-w-70 px-5 py-6 text-white md:w-90 md:max-w-none md:px-10 md:py-10">
            <h2 className="max-w-55 text-[30px] leading-[1.05] font-semibold md:text-[50px]">
              {heroEvent.event_name}
            </h2>

            <div className="flex items-end gap-3 pt-4 md:justify-end md:gap-4 md:text-right">
              <p className="text-[26px] leading-none font-semibold whitespace-nowrap md:text-[30px]">
                {formatHeroDate(heroEvent.event_date)}
              </p>
              {heroEvent.event_location && (
                <p className="bg-white px-2 py-1 font-['Open_Sans'] text-sm leading-2.5 font-semibold whitespace-nowrap text-black uppercase">
                  {heroEvent.event_location}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </SectionWrapper>
  );
};
export default HeroHeader;
