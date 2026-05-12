"use client";

import { useEffect, useRef, useState } from "react";
import EventCarouselCard from "@/components/EventCarouselCard";
import Link from "next/link";
import Button from "./Button";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const EventCarousel = ({ events = [] }) => {
  const trackRef = useRef(null);

  const getScrollStep = () => {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild;

    if (!track || !firstItem) return 0;

    return firstItem.getBoundingClientRect().width + 16;
  };

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const scrollStep = getScrollStep();

    if (!track) return;

    const atStart = track.scrollLeft <= 0;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      return;
    }

    track.scrollBy({
      left: direction * (scrollStep || track.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mx-auto my-10 w-[90%]">
      <div className="mb-4 flex items-center justify-end gap-4">
        <h2 className="uppercase">Det sker i dag</h2>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Forrige event"
          >
            <IoArrowBackSharp size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Næste event"
          >
            <IoArrowForwardSharp size={20} />
          </button>
        </div>
      </div>

    <div className="overflow-x-auto pb-2">
  <div
    ref={trackRef}
    className="flex w-[calc(100%+5vw)] snap-x snap-mandatory gap-4 scroll-smooth md:w-[calc(100%+12.5vw)]"
  >
    {events.slice(0, 8).map((event) => (
      <div key={event.id} className="min-w-59 snap-start">
        <EventCarouselCard event={event} />
      </div>
    ))}
  </div>
</div>

      <div className="flex justify-end m-4">
        
        <Link href="/">
          <Button>Læs Mere</Button>
        </Link>
      </div>
    </section>
  );
};

export default EventCarousel;
