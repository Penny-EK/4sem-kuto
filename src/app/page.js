import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";

export default async function Home() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <main>
      <h1>Events</h1>

      {!events || events.length === 0 ? (
        <p>Ingen events fundet</p>
      ) : (
        events.map((event) => (
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
    </main>
  );
}