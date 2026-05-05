import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getEventGroup(eventDateString) {
  const today = startOfDay(new Date());

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const endOfThisWeek = new Date(today);
  endOfThisWeek.setDate(today.getDate() + 7);

  const endOfNextWeek = new Date(today);
  endOfNextWeek.setDate(today.getDate() + 14);

  const eventDate = startOfDay(eventDateString);

  if (eventDate.getTime() === today.getTime()) return "I dag";
  if (eventDate.getTime() === tomorrow.getTime()) return "I morgen";
  if (eventDate > tomorrow && eventDate <= endOfThisWeek) return "Denne uge";
  if (eventDate > endOfThisWeek && eventDate <= endOfNextWeek) return "Næste uge";

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
    "Denne uge": [],
    "Næste uge": [],
    "Senere": [],
  };

  events?.forEach((event) => {
    const group = getEventGroup(event.event_date);
    groupedEvents[group].push(event);
  });

  return (
    <main>
      <h1>Events</h1>

      {Object.entries(groupedEvents).map(([groupName, groupEvents]) => {
        if (groupEvents.length === 0) return null;

        return (
          <section key={groupName} className="my-8">

<div className="mb-4">
  <h2 className="mx-auto w-[90%] pl-0 uppercase">
    {groupName}
  </h2>

  <div className="ml-5 h-px w-full bg-black" />
</div>

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
          </section>
        );
      })}
    </main>
  );
}