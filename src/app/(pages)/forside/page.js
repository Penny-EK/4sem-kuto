import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import EventCarousel from "@/components/EventCarousel";
import Link from "next/link";
import Button from "@/components/Button";
import ArticleCard from "@/components/ArticleCard";
import EventCard from "@/components/EventCard";
import SectionWrapper from "@/components/SectionWrapper";
import YouthCard from "@/components/YouthCard";

export default async function Forside() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("article_date", { ascending: false });

    const { data: youthPrograms, error: youthError } = await supabase
    .from("youthprograms")
    .select("*");
  
  
  if (youthError) {
    console.error("Youth programs error:", youthError.message);
  }

  return (
    <main className="contents">
  {/* HERO */}
  <SectionWrapper
    padding="py-0"
    innerClass="md:grid md:grid-cols-[320px_80px_1fr] md:items-center md:gap-10 gap-8"
    gridPosition="col-[main]"
  >
    <div className="flex gap-6 md:contents">
      <Image
        src="/forsideImage.png"
        alt="Kulturværftet"
        width={800}
        height={1200}
        className="h-[72vh] w-[62%] object-cover md:col-start-1 md:h-[580px] md:w-full"
      />

      <div className="flex items-center md:col-start-2">
        <h5 className="[writing-mode:vertical-rl] text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Kulturværftet
        </h5>
      </div>
    </div>

    <div className="mx-auto w-[90%] text-left md:col-start-3 md:w-auto md:text-left">
      <h2>
        Kulturværftet: Din destination for oplevelser i hjertet af
        Helsingør. Et pulserende kulturcentrum og regionalt spillested i
        Kulturhavn Kronborg.
      </h2>
    </div>
  </SectionWrapper>

  <SectionWrapper gridPosition="col-[main]">
    <EventCarousel events={events || []} />
  </SectionWrapper>

  {/* MAD */}
  <SectionWrapper
    innerClass="md:grid md:grid-cols-3 md:items-start md:gap-10 gap-6"
    gridPosition="col-[main] md:col-start-[main-start] md:col-end-[edge-end]"
  >
    {/* TEXT */}
    <div className="flex flex-col gap-4 md:col-start-1 md:col-end-2">
      <h2 className="uppercase">Mad</h2>

      <p>
        Nyd et måltid i hyggelige omgivelser! Vores caféer byder på alt fra
        lette frokostanretninger til overdådige middagsmenuer. Vi har også
        særlige tilbud i forbindelse med koncerter og events.
      </p>

      <div>
        <Link href="/mad">
          <Button>Udforsk mad</Button>
        </Link>
      </div>
    </div>

    {/* IMAGE */}
    <div className="-mx-[10vw] md:mx-0 md:col-start-2 md:col-end-4 md:mt-15">
      <Image
        src="/forsideMad.png"
        alt="Mad på Kulturværftet"
        width={1200}
        height={700}
        className="h-[260px] w-[90%] object-cover md:h-[430px] md:w-full"
      />
    </div>
  </SectionWrapper>

  {/* ARTIKLER */}
  <SectionWrapper gridPosition="col-[main]">
    <h2 className="mb-6 uppercase">Artikler</h2>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {(articles || []).slice(0, 6).map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          slug={article.article_slug}
          image={article.article_picture}
          title={article.article_title}
          date={article.article_date}
        />
      ))}
    </div>
  </SectionWrapper>

  {/* LIVEFORBUNDET */}
  <SectionWrapper
    innerClass="md:grid md:grid-cols-3 md:items-end md:gap-10 gap-6"
    gridPosition="col-[main] md:col-start-[edge-start] md:col-end-[main-end]"
  >
  {/* IMAGE */}
<div className="relative left-1/2 w-screen -translate-x-1/2 md:left-auto md:col-start-1 md:col-end-3 md:w-full md:translate-x-0">
  <Image
    src="/forsideLiveforbundet.png"
    alt="Liveforbundet"
    width={1200}
    height={700}
    className="h-[260px] w-full object-cover md:h-[500px]"
  />
</div>

    {/* TEXT + BUTTON */}
    <div className="flex flex-col gap-4 md:col-start-3 md:row-start-1 md:justify-end">
      <div className="flex flex-col gap-4">
        <h2 className="uppercase">Liveforbundet</h2>

        <h3 className="italic">
          Live-koncerter på abonnement
        </h3>

        <p>
          Tag del i Helsingørs pulserende musikscene!
          Liveforbundet giver dig adgang til eksklusive
          koncerter med talentfulde, nye kunstnere,
          nøje udvalgt til dit lokale spillested.
        </p>
      </div>

      <div>
        <Link href="/liveforbundet">
          <Button>Liveforbundet</Button>
        </Link>
      </div>
    </div>
  </SectionWrapper>

{/* UNGDOMSUDDANNELSER */}
<SectionWrapper gridPosition="col-[main]">
  <div className="mb-6 flex flex-col gap-4 md:mt-20">
    <h2 className="uppercase">Ungdomsuddannelser</h2>
    <p className="italic">Forløb for ungdomsuddannelser</p>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
    {(youthPrograms || []).map((program) => (
      <YouthCard
        key={program.id}
        id={program.id}
        image={program.youthprogram_picture}
        title={program.youthprogram_name}
        description={program.youthprogram_description}
      />
    ))}
  </div>
  <div className="mb-6 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:justify-between">
      <p className="">Har du spørgsmål til workshoppen eller lyst til at deltage med en klasse? Så tag fat i os på fresp@helsingor.dk.</p>

      
    </div>
</SectionWrapper>

  {/* KORT FRA KALENDEREN */}
  <SectionWrapper gridPosition="col-[main]">
    <div className="mb-6 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:justify-between">
      <h2 className="uppercase">Kort fra kalenderen</h2>

      <Link href="/">
        <Button>Se kalenderen</Button>
      </Link>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {(events || []).slice(0, 6).map((event) => (
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

  {/* LOKATION */}
  <SectionWrapper
    innerClass="md:grid md:grid-cols-[1fr_320px] md:gap-16 gap-8"
    gridPosition="col-[main]"
  >
    <div className="flex flex-col gap-8">
      <h2 className="uppercase">Lokation</h2>

      <p>
        Kulturværftet & Toldkammeret ligger centralt på havnefronten i
        Helsingør. I kort gåafstand fra Helsingør Station, byen,
        færgeterminaler og flere parkeringsmuligheder, er de to huse nemme
        at komme til.
      </p>

      <div className="flex flex-col gap-6 md:flex-row md:gap-16">
        <div className="flex flex-col gap-1">
          <p className="uppercase">Kulturværftet</p>
          <p>Allegade 2</p>
          <p>3000 Helsingør</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="uppercase">Toldkammeret</p>
          <p>Havnepladsen 1</p>
          <p>3000 Helsingør</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>
  );
}