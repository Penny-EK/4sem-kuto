"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import Label from "@/components/Label";
import Button from "@/components/Button";

export default function EventFilter({ events }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const locations = [...new Set(events.map((event) => event.event_location))]
    .filter(Boolean)
    .sort();

  const categories = [...new Set(events.map((event) => event.event_category))]
    .filter(Boolean)
    .sort();

  const filteredEvents = events.filter((event) => {
    const matchesLocation = activeLocation
      ? event.event_location === activeLocation
      : true;

    const matchesCategory = activeCategory
      ? event.event_category === activeCategory
      : true;

    return matchesLocation && matchesCategory;
  });

  return (
    <>
      <div className="mx-auto my-6 flex w-[90%] items-center justify-between">
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className="rounded-md bg-black px-4 py-2 text-white uppercase"
        >
          Filter
        </button>

        {(activeLocation || activeCategory) && (
          <button
            type="button"
            onClick={() => {
              setActiveLocation("");
              setActiveCategory("");
            }}
            className="underline"
          >
            Nulstil
          </button>
        )}
      </div>

      {isFilterOpen && (
        <aside className="fixed left-0 top-0 z-50 h-dvh w-[75%] bg-black px-6 py-8 text-white overflow-y-auto overscroll-contain md:w-[60%]">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="uppercase text-white">Filter</h2>

            <button
              type="button"
              onClick={() => setIsFilterOpen(false)}
              className="text-white"
            >
              Luk
            </button>
          </div>

          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16">
            <section>
              <h3 className="mb-4 uppercase underline">Lokation</h3>

              <div className="flex flex-col items-start gap-3">
                {locations.map((location) => (
                  <button
                    type="button"
                    key={location}
                    onClick={() =>
                      setActiveLocation(
                        activeLocation === location ? "" : location
                      )
                    }
                    className={
                      activeLocation === location
                        ? "opacity-100"
                        : "opacity-70"
                    }
                  >
                    <Label variant="location">{location}</Label>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-4 uppercase underline">Kategori</h3>

              <div className="flex flex-col items-start gap-3">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category ? "" : category
                      )
                    }
                    className={
                      activeCategory === category
                        ? "opacity-100"
                        : "opacity-70"
                    }
                  >
                    <Label>{category}</Label>
                  </button>
                ))}
              </div>
            </section>

            <Button onClick={() => setIsFilterOpen(false)}>Vis events</Button>
          </div>
        </aside>
      )}

      {filteredEvents.length === 0 ? (
        <p className="mx-auto w-[90%]">Ingen events fundet</p>
      ) : (
        filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.event_img}
            title={event.event_name}
            date={event.event_date}
            time={event.event_time}
            location={event.event_location}
            building={event.event_building}
            price={event.event_price}
            category={event.event_category}
          />
        ))
      )}
    </>
  );
}