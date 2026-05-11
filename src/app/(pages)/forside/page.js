import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import EventCarousel from "@/components/EventCarousel";
import Link from "next/link";
import Button from "@/components/Button";
import ArticleCard from "@/components/ArticleCard";
import EventCard from "@/components/EventCard";

export default async function Forside() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("article_date", { ascending: false });

  return (
    <main>
      {/* HERO */}
      <section className="flex flex-col md:mx-auto md:mb-30 md:grid md:w-[75%] md:grid-cols-[320px_80px_1fr] md:items-center md:gap-10">
        <div className="m-4 flex gap-6 md:contents md:m-0">
          <Image
            src="/forsideImage.png"
            alt="Kulturværftet"
            width={800}
            height={1200}
            className="h-[75vh] w-[60%] object-cover md:col-start-1 md:h-[580px] md:w-full"
          />

          <div className="flex items-center md:col-start-2">
            <h5 className="[writing-mode:vertical-rl] text-7xl font-black uppercase leading-none tracking-tight">
              Kulturværftet
            </h5>
          </div>
        </div>

        <div className="m-8 text-center md:col-start-3 md:m-0 md:text-left">
          <h2>
          Kulturværftet: Din destination for oplevelser i hjertet af Helsingør. Et pulserende kulturcentrum og regionalt spillested i Kulturhavn Kronborg.
          </h2>
        </div>
      </section>

      <EventCarousel events={events || []} />

      {/* MAD */}
      <section className="mx-auto my-12 flex w-[100%] flex-col gap-6 md:w-[100%]">
        <div className="flex flex-col gap-4 md:w-[55%] md:ml-20">
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

        <Image
          src="/forsideMad.png"
          alt="Mad på Kulturværftet"
          width={1200}
          height={700}
          className="h-[260px] w-[90%] object-cover md:ml-auto md:h-[500px] md:w-[65%]"
        />
      </section>

     {/* ARTIKLER */}
<section className="mx-auto my-12 w-[90%] md:w-[75%]">
  <h2 className="mb-6 uppercase">Artikler</h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1fr]">
    {(articles || []).slice(0, 6).map((article) => (
      <div key={article.id} className="w-full">
        <ArticleCard
          id={article.id}
          slug={article.article_slug}
          image={article.article_picture}
          title={article.article_title}
          date={article.article_date}
        />
      </div>
    ))}
  </div>
</section>

<section className="mx-auto my-12 flex w-[100%] flex-col gap-6 md:w-[100%]">

<Image
          src="/forsideLiveforbundet.png"
          alt="Mad på Kulturværftet"
          width={1200}
          height={700}
          className="h-[260px] w-[90%] object-cover md:mr-auto md:h-[500px] md:w-[70%]"
        />
        <div className="flex flex-row">
<div className="flex flex-col gap-4 md:w-[50%] md:ml-20 ">
        <h2 className="uppercase">Liveforbundet</h2>
        <h3 className="italic">Live-koncerter på abonnement</h3>
        <p>Tag del i Helsingørs pulserende musikscene!
        Liveforbundet giver dig adgang til eksklusive koncerter med talentfulde, nye kunstnere, nøje udvalgt til dit lokale spillested.</p>
        </div>
        <div className=" flex items-end">
            <Link href="/liveforbundet">
              <Button>Liveforbundet</Button>
            </Link>
          </div>
          </div>
       
</section>
<section className="mx-auto my-12 w-[90%] md:w-[75%]">
  <h2 className="mb-6 uppercase">Kort fra kalenderen</h2>
  <Link href="/" >
              <Button className="mb-4">Se kalenderen</Button>
            </Link>

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
</section>

{/* LOKATION */}
<section className="mx-auto my-16 flex w-[90%] flex-col gap-8 md:w-[75%] md:grid md:grid-cols-[1fr_320px] md:gap-16">

  {/* TEXT */}
  <div className="flex flex-col gap-8">
    <h2 className="uppercase">Lokation</h2>

    <p>
      Kulturværftet & Toldkammeret ligger centralt på havnefronten i
      Helsingør. I kort gåafstand fra Helsingør Station, byen,
      færgeterminaler og flere parkeringsmuligheder, er de to huse
      nemme at komme til.
    </p>

    <div className="flex flex-row gap-6  md:gap-16">
      
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
</section>
    </main>
  );
}