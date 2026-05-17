import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import LiveImageCarousel from "@/components/LiveImageCarousel";
import HeroHeader from "@/components/HeroHeader";

export default async function Liveforbundet() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("event_liveforbundet", "true")
    .order("event_date", { ascending: true });

  const heroEvents = (events || []).slice(0, 3);

  return (
    <main id="liveforbundet" className="liveforbundet contents">
      {heroEvents.length > 0 && <HeroHeader heroEvents={heroEvents} />}
      <SectionWrapper
        padding="py-12"
        innerClass="grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
        gridPosition="col-[main]"
      >
        <div className="absolute top-[16%] right-[63%] z-[-1] h-[718.84px] w-[773.36px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(25.50,_0,_255,_0.37)_38%,_rgba(89.67,_20,_229,_0)_100%)]"></div>
        {/* TEXT */}
        <div className="flex flex-col gap-6">
          <h1>Liveforbundet</h1>

          <h2 className="italic">Live-koncerter på abonnement</h2>

          <p>
            Oplev de bedste koncerter i hjertet af Helsingør Liveforbundet er et
            abonnement til dig, der drømmer om at gå på opdagelse i de bedste
            koncerter med mindre og upcoming artister og bands håndplukket
            specifikt til dit lokale spillested.
          </p>

          <p>
            Abonnementet giver adgang til over <strong>52 koncerter</strong> om
            året for <strong>kun 135 kr</strong>. om måneden. Som
            abonnementsholder kan du kvit og frit tage en gæst med til alle
            Liveforbundets koncerter.
          </p>
          <p>
            Vi har skræddersyet ordningen på den måde, fordi vi gerne vil gøre
            det nemt for dig at komme ud og opleve god musik med mennesker, du
            holder har. Virkelig god musik på ugens mindst travle tidspunkter
            Med Liveforbundet får du adgang til alle Kulturværftets intime
            koncerter med mindre og opkommende kunstnere samt bands.{" "}
          </p>

          <div className="flex gap-4">
            <Button>Login</Button>
            <Button>Opret bruger</Button>
          </div>
        </div>
        <div className="absolute top-[10%] right-[0%] z-[-1] h-[1419.36px] w-[1419.36px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(255,_0,_0,_0.37)_38%,_rgba(229,_20,_20,_0)_100%)]"></div>
        {/* IMAGEcarousel */}
        <LiveImageCarousel />
      </SectionWrapper>

      {/* KALENDER */}
      <SectionWrapper
        gridPosition="col-[main]"
        outerClass="bg-white text-black"
      >
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
