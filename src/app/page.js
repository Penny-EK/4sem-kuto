import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import Label from "@/components/Label";
import SectionWrapper from "@/components/SectionWrapper";

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
  if (eventDate > endOfNextWeek && eventDate <= endOfNextMonth)
    return "Næste måned";

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
    Senere: [],
  };

  events?.forEach((event) => {
    const group = getEventGroup(event.event_date);
    groupedEvents[group].push(event);
  });

  const heroEvent = events?.[0];

  return (
    <main className="contents">
      {/* DESKTOP HERO */}
      {heroEvent && (
        <SectionWrapper
          padding="py-0"
          outerClass="hidden md:grid"
          innerClass="md:grid md:grid-cols-[220px_1fr] md:items-center md:gap-8"
          gridPosition="col-[main] md:col-start-[main-start] md:col-end-[edge-end]"
        >
          <div>
            <h2>{heroEvent.event_name}</h2>
            <p>{heroEvent.event_date}</p>

            <Label variant="location">
              {heroEvent.event_location || "Lokation"}
            </Label>
          </div>

          <div className="relative h-[420px] w-[90%] overflow-hidden">
            <Image
              src={heroEvent.event_img}
              alt={heroEvent.event_name}
              fill
              className="object-cover"
            />
          </div>
        </SectionWrapper>
      )}

      {Object.entries(groupedEvents).map(([groupName, groupEvents]) => {
        if (groupEvents.length === 0) return null;

        return (
          <SectionWrapper
          key={groupName}
          padding="py-9.25"
          gridPosition="col-[main]"
          innerClass="gap-8"
        >
         <div className="w-full">
  <h2 className="uppercase">{groupName}</h2>

  <div className="mt-2 h-px w-screen bg-black md:relative md:left-0" />
</div>
        
          <div className="grid grid-cols-1 gap-6 md:ml-auto md:w-[88%] md:grid-cols-3 md:gap-x-8 md:gap-y-14">
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
        </SectionWrapper>
        );
      })}
    </main>
  );
}