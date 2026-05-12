import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Label from "@/components/Label";
import LiveImageCarousel from "@/components/LiveImageCarousel";

export default async function Liveforbundet() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("event_category", "Musik")
    .order("event_date", { ascending: true });

  const heroEvent = events?.[0];

  return (
    <main className="contents">
     {/* HERO + INTRO */}
<div className="contents">
  {heroEvent && (
    <SectionWrapper
      padding="py-0"
      innerClass="md:grid md:grid-cols-[260px_1fr] md:items-center md:gap-8"
      gridPosition="col-[main]"
    >
            <div className="md:pl-10">
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
          </SectionWrapper>
        )}

<SectionWrapper
  padding="py-12"
  innerClass="grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
  gridPosition="col-[main]"
>
          {/* TEXT */}
          <div className="flex flex-col gap-6">
            <h1>Liveforbundet</h1>

            <h2 className="italic">
              Live-koncerter på abonnement
            </h2>

            <p>
            Oplev de bedste koncerter i hjertet af Helsingør
            Liveforbundet er et abonnement til dig, der drømmer om at gå på opdagelse i de bedste koncerter med mindre og upcoming artister og bands håndplukket  specifikt til dit lokale spillested. 
            </p>

            <p>
            Abonnementet giver adgang  til over <strong>52 koncerter</strong> om året for <strong>kun 135 kr</strong>. om måneden. Som  abonnementsholder kan du kvit og frit tage en gæst med til alle  Liveforbundets koncerter.
            </p>
            <p>Vi har skræddersyet ordningen på den  måde, fordi vi gerne vil gøre det nemt for dig at komme ud og opleve god musik med mennesker, du holder har.
Virkelig god musik på ugens mindst travle tidspunkter
Med Liveforbundet får du adgang til alle Kulturværftets intime koncerter med mindre og opkommende kunstnere samt bands. </p>

            <div className="flex gap-4">
              <Button>Login</Button>
              <Button>Opret bruger</Button>
            </div>
          </div>

          {/* IMAGEcarousel */}
          <LiveImageCarousel />
        </SectionWrapper>
      </div>

      {/* KALENDER */}
      <SectionWrapper gridPosition="col-[main]">
        <h2 className="mb-8 italic">Kalender</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(events || []).slice(0, 12).map((event) => (
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
    </main>
  );
}