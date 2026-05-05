import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import Label from "@/components/Label"

export default async function Singleview({ params }) {
  const { id } = await params;

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  console.log("ID:", id);
  console.log("EVENT:", event);
  console.log("ERROR:", error);

  if (error || !event) {
    return <p>Eventet kunne ikke findes.</p>;
  }

  return (
    <main>
      {event.event_img && (
        <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={event.event_img}
          alt={event.event_name}
          fill
          className="object-cover"
        />
      </div>
      )}
<p>{event.event_date} · {event.event_time}</p> 
<Label></Label>

      <h1>{event.event_name}</h1>

      
      <p>{event.event_building} · {event.event_location}</p>

      {event.event_price && <p>{event.event_price}</p>}

      {event.event_description && (
        <section>
          <h2>Om eventet</h2>
          <p>{event.event_description}</p>
        </section>
      )}

      {event.event_detail && (
        <section>
          <h2>Praktisk info</h2>
          <p>{event.event_detail}</p>
        </section>
      )}

      {event.event_signup && (
        <a href={event.event_signup} target="_blank">
          Book nu
        </a>
      )}
    </main>
  );
}