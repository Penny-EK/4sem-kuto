import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import Label from "@/components/Label";
import Button from "@/components/Button";

const PracticalInfo = ({ date, time, doors, location, building, price, signup }) => {
  return (
    <section className="mx-auto my-8 w-[90%] rounded-lg border border-neutral-500 p-6">
      <h2 className="mb-6 uppercase">Praktisk info</h2>

      <ul className="space-y-4">
        <li>Dato: {date}</li>
        <li>Tid: {time}</li>
        <li>Døre: {doors}</li>
        <li>
          Sted: {building}
          {location && ` – ${location}`}
        </li>
        <li>Pris: {price}</li>
      </ul>

      <div className="mt-8 flex items-center gap-3">
        {signup ? (
          <a href={signup} target="_blank" className="rounded-md bg-black px-6 py-3 text-white">
            Køb billet
          </a>
        ) : (
          <Button>Køb billet</Button>
        )}

        {price && <span>{price}</span>}
      </div>
    </section>
  );
};

export default async function Singleview({ params }) {
  const { id } = await params;

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !event) {
    return <p>Eventet kunne ikke findes.</p>;
  }

  return (
    <main className="mx-auto mb-2">
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

      <section className="mx-auto mt-10 flex w-[90%] flex-col gap-4">
        <div className="mb-2 flex w-full items-center justify-between">
          <p>{event.event_date} · {event.event_time}</p>
          <Label>{event.event_category || "Kategori"}</Label>
        </div>

        <h1 className="uppercase">{event.event_name}</h1>

        <p>{event.event_building} · {event.event_location}</p>

        <div className="mb-2 mt-2 flex w-full items-center gap-2">
          <Button>Køb billet</Button>
          {event.event_price && <p>{event.event_price}</p>}
        </div>

        {event.event_description && <h3>{event.event_description}</h3>}
        {event.event_detail && <p>{event.event_detail}</p>}
      </section>

      <PracticalInfo
        date={event.event_date}
        time={event.event_time}
        doors={event.event_doors}
        building={event.event_building}
        location={event.event_location}
        price={event.event_price}
        signup={event.event_signup}
      />
    </main>
  );
}