import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import Label from "@/components/Label";

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getEventGroup(eventDateString) {
  const today = startOfDay(new Date());

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const endOfNextWeek = new Date(today);
  endOfNextWeek.setDate(today.getDate() + 7);

  const endOfNextMonth = new Date(today);
  endOfNextMonth.setMonth(today.getMonth() + 1);

  const eventDate = startOfDay(eventDateString);

  if (eventDate.getTime() === today.getTime()) return "I dag";
  if (eventDate.getTime() === tomorrow.getTime()) return "I morgen";
  if (eventDate > tomorrow && eventDate <= endOfNextWeek) return "Næste uge";
  if (eventDate > endOfNextWeek && eventDate <= endOfNextMonth) return "Næste måned";

  return "Senere";
}

export default async function Home() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
  }

  const groupedEvents = {
    "I dag": [],
    "I morgen": [],
    "Næste uge": [],
    "Næste måned": [],
    "Senere": [],
  };

  events?.forEach((event) => {
    const group = getEventGroup(event.event_date);
    groupedEvents[group].push(event);
  });

  const heroEvent = events?.[0];

  return (
    <main>
      {/* DESKTOP HERO */}
      {heroEvent && (
        <section className="mx-auto mt-10 hidden w-[75%] grid-cols-[220px_1fr] items-center gap-8 md:grid">
          <div>
            <h2>{heroEvent.event_name}</h2>
            <p>{heroEvent.event_date}</p>
            <Label variant="location">
              {heroEvent.event_location || "Lokation"}
            </Label>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden">
            <Image
              src={heroEvent.event_img}
              alt={heroEvent.event_name}
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      {Object.entries(groupedEvents).map(([groupName, groupEvents]) => {
        if (groupEvents.length === 0) return null;

        return (
          <section key={groupName} className="my-10">
            <div className="mb-8">
              <h2 className="mx-auto w-[90%] uppercase md:w-[75%]">
                {groupName}
              </h2>

              <div className="ml-5 h-px w-full bg-black md:ml-[12.5%] md:w-[87.5%]" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:ml-auto md:mr-0 md:w-[82%] md:grid-cols-3">
              {groupEvents.map((event) => (
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
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}