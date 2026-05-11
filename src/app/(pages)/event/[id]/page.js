import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import Button from "@/components/Button";

const PracticalInfo = ({ date, time, doors, location, building, price, signup }) => {
  return (
    <section className="mt-10">
      <h2 className="mb-4 underline underline-offset-4">
        Praktisk information
      </h2>

      <ul className="ml-6 list-disc space-y-3">
        <li>Dato: {date}</li>
        <li>Tid: {time}</li>
        <li>Døre: {doors}</li>
        <li>
          Sted: {building}
          {location && ` - ${location}`}
        </li>
        <li>Pris: {price}</li>
      </ul>

      <div className="mt-6">
        {signup ? (
          <a
            href={signup}
            target="_blank"
            className="inline-block rounded-md bg-black px-6 py-3 text-white"
          >
            Køb billet
          </a>
        ) : (
          <Button>Køb billet</Button>
        )}
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
    <main>
      <section className="mx-auto mt-10 w-[90%] md:w-[80%]">
        <div className="grid gap-4 border-b border-black pb-3 md:grid-cols-[1.5fr_1fr_1fr] md:items-end">
          <h1 className="uppercase">{event.event_name}</h1>
          <p>{event.event_date} · {event.event_time}</p>
          <p>{event.event_location}</p>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
          {event.event_img && (
            <div className="relative h-[300px] w-full overflow-hidden md:h-[430px]">
              <Image
                src={event.event_img}
                alt={event.event_name}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-6">
            {event.event_description && (
              <h3>{event.event_description}</h3>
            )}

            {event.event_detail && (
              <p>{event.event_detail}</p>
            )}

            <PracticalInfo
              date={event.event_date}
              time={event.event_time}
              doors={event.event_doors}
              building={event.event_building}
              location={event.event_location}
              price={event.event_price}
              signup={event.event_signup}
            />
          </div>
        </div>
      </section>
    </main>
  );
}