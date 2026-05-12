import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export default async function Mad() {
  return (
    <main className="contents">

      {/* INTRO */}
      <SectionWrapper
  padding="py-0"
  innerClass="md:grid md:grid-cols-3 md:gap-12 gap-10"
  gridPosition="col-[main] md:col-start-[main-start] md:col-end-[edge-end]"
>
  {/* TEXT */}
  <div className="flex flex-col gap-6 md:col-start-1 md:col-end-3">
    <h1 className="uppercase">Mad</h1>

    <h3>
      Kombiner dit besøg på Kulturværftet og i Toldkammeret med noget
      lækkert at spise. Vores køkkener og cafeer tilbyder både frokost,
      aftensmad, fællesspisninger og koncertmenuer, ligesom vi står for
      selskabsmenuen til det private arrangement og frokosten til
      netværksmødet. Se vores store og varierede udvalg her på siden.
    </h3>

    {/* BUTTONS */}
    <div className="flex flex-col gap-4 md:flex-row">
      <Link
        href="https://spisehuset-kuto.dk/"
        target="_blank"
        className="block"
      >
        <Button>Spisehuset</Button>
      </Link>

      <Link
        href="https://spisekammeret.dk/"
        target="_blank"
        className="block"
      >
        <Button>Spisekammeret</Button>
      </Link>
    </div>
  </div>

  {/* IMAGE */}
  <div className="hidden md:col-start-2 md:col-end-4 md:-mt-24 md:block">
    <Image
      src="/mad-desktop.png"
      alt="Brød fra Spisehuset"
      width={1400}
      height={700}
      className="h-[430px] w-full object-cover"
    />

    <small>Brød fra spisehuset</small>
  </div>
</SectionWrapper>

      {/* SPISEHUSET */}
      <SectionWrapper
        innerClass="md:grid md:grid-cols-2 md:gap-10 gap-6"
        gridPosition="col-[main]"
      >
       {/* LEFT */}
<div className="flex flex-col gap-6 md:sticky md:top-24 md:self-start">
  <h1 className="uppercase">
    Spisehuset på <br />
    Kulturværftet
  </h1>

  <Image
    src="/mad-spisehuset.png"
    alt="Spisehuset"
    width={800}
    height={500}
   className="relative right-[5vw] h-[260px] w-screen object-cover md:right-0 md:h-[260px] md:w-full"
  />
</div>

        {/* RIGHT */}
  <div className="flex flex-col gap-8 md:pt-32">

<small className="italic">
  Spisehuset ligger i stueetagen med flot udsigt
  over havnen, vandet og Kronborg.
</small>

<div className="flex flex-col gap-6">
  <p>
    Året rundt er der liv og masser af besøgende i området,
    og hos os kan du nyde både en god frokost,
    et glas kølig vin i solen eller en kop
    friskbrygget kaffe med kage.
  </p>

  <div>
    <Link
      href="https://spisehuset-kuto.dk/"
      target="_blank"
    >
      <Button>Besøg spisehuset</Button>
    </Link>
  </div>
</div>

{/* MAD TIL ARRANGEMENTER */}
<div className="flex flex-col gap-6">
  <h2>
    Mad til <br />
    arrangementer
  </h2>

  <p>
    Spisehuset leverer også forplejning til
    Kulturværftets mødegæster og til udvalgte
    arrangementer er det muligt at tilkøbe mad
    inden koncerter, teater og shows.
    Du kan tilkøbe mad sammen med billetter.
  </p>

  <div>
    <Link href="/?menu=true">
      <Button>Se arrangementer med menu</Button>
    </Link>
  </div>
</div>

{/* KONTAKT */}
<div className="flex flex-col gap-6">
  <div>
    <p>Forpagter Spisehuset / Kulturværftet</p>
    <p>Jeanne Brammer</p>
  </div>

  <div>
    <p className="uppercase">Kontakt</p>
    <p>jb@spisehuset-kuto.dk</p>
    <p>Tlf. i caféen: +45 49 28 37 51</p>
  </div>

  <div>
    <p className="uppercase">Åbningstider</p>
    <p>mandag - fredag 9:00 - 17:00</p>
    <p>lørdag - søndag 10:00 - 17:00</p>
  </div>
</div>
</div>
</SectionWrapper>

     {/* SPISEKAMMERET */}
<SectionWrapper
  innerClass="md:grid md:grid-cols-2 md:gap-10 gap-10"
  gridPosition="col-[main]"
>
  {/* LEFT */}
  <div className="flex flex-col gap-8 md:pt-32">
    <p>
      Spisekammeret er Toldkammerets hjerte – byens
      hjertekammer. Spisekammeret er åbent alle
      hverdage fra kl. 16.00-20.00, samt i forbindelse
      med arrangementer og koncerter
    </p>

    <div className="flex justify-end md:justify-start">
      <Link href="https://spisekammeret.dk/" target="_blank">
        <Button>Besøg spisekammeret</Button>
      </Link>
    </div>

    <p>
      Der er fællesspisning i Toldkammeret på hverdage
      fra kl. 17.45-19.00. Til fællesspisning sidder vi
      sammen, vi henter maden sammen, vi bærer ud af
      bordet sammen. Kort sagt, her er vi sammen om
      tingene – også selvom du kommer alene.
    </p>

    {/* KONTAKT */}
    <div className="flex flex-col gap-6 pt-10">
      <div>
        <p>Forpagter Spisekammeret / Toldkammeret</p>
        <p>NC Spisekammeret</p>
        <p>Mads Hjalager</p>
      </div>

      <div>
        <p className="uppercase">Kontakt</p>
        <p>mh@spisekammeret.dk / +45 53 74 75 76</p>
        <p>Tlf. i caféen: +45 49 28 20 52</p>
      </div>

      <div>
        <p className="uppercase">Åbningstider:</p>
        <p>mandag - fredag 16:00 -19:30</p>
        <p>lørdag - søndag Lukket</p>
      </div>
    </div>
  </div>

  {/* RIGHT / STICKY */}
  <div className="flex flex-col gap-6 md:sticky md:top-24 md:self-start">
    <h1 className="uppercase">
      Spisekammeret i <br />
      Toldkammeret
    </h1>

    <Image
      src="/mad-spisekammeret.png"
      alt="Spisekammeret"
      width={800}
      height={500}
      className="relative left-[5vw] h-[300px] w-screen object-cover md:left-0 md:w-full"
    />
  </div>
</SectionWrapper>

    </main>
  );
}