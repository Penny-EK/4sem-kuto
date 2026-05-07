import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default async function Mad() {
  return (
    <main>

      <div className="mx-auto my-8 flex w-[90%] flex-col gap-10 py-8">
        <h1 className="uppercase">Mad</h1>

        <h3>
          Kombiner dit besøg på Kulturværftet og i Toldkammeret med noget
          lækkert at spise. Vores køkkener og cafeer tilbyder både frokost,
          aftensmad, fællesspisninger og koncertmenuer, ligesom vi står for
          selskabsmenuen til det private arrangement og frokosten til
          netværksmødet. Se vores store og varierede udvalg her på siden.
        </h3>

        <div className="mx-auto mb-2 flex w-full items-center justify-between">
            <Link href={`https://spisehuset-kuto.dk/`} target ="_blank "className="block">
          <Button>Spisehuset</Button>
          </Link>
          <Link href={`https://spisekammeret.dk/`} target ="_blank "className="block">
          <Button>Spisekammeret</Button>
          </Link>
        </div>
      </div>


      <div className="mx-auto my-8 flex flex-col gap-4">
        <h1 className="mx-auto w-[80%] uppercase">
          Spisehuset <br />
          på Kulturværftet
        </h1>

        <Image
  src="/mad-spisehuset.png"
  alt="Spisehuset"
  width={800}
  height={500}
  className="h-[260px] w-[90%] object-cover"
/>

        <small className="mx-auto block w-[85%] italic">
          Spisehuset ligger i stueetagen med flot udsigt over havnen, vandet og
          Kronborg.
        </small>

        <div className="mx-auto flex w-[90%] flex-col gap-6">
          <p>
            Året rundt er der liv og masser af besøgende i området, og hos os
            kan du nyde både en god frokost, et glas kølig vin i solen eller en
            kop friskbrygget kaffe med kage.
          </p>

          <div className="flex justify-end">
          <Link href={`https://spisehuset-kuto.dk/`} target ="_blank "className="block">
            <Button>Besøg Spisehuset</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 flex w-[90%] flex-col gap-10 py-8">
        <h2 className="">Mad <br/> til arrangementer </h2>

        <p>
        Spisehuset leverer også forplejning til Kulturværftets mødegæster og til udvalgte arrangementer er det muligt at tilkøbe mad inden koncerter,  teater og shows. Du kan tilkøbe mad sammen med billetter.
        </p>
        <div className="">
          <Button>Se arrangementer med menu</Button>
          </div>
        
      </div>


      <div className="flex flex-col gap-6 mx-auto w-[90%] py-10 ">
        <div>
        <p>Forpagter Spisehuset / Kulturværftet</p>
        <p>Jeanne Brammer</p>
        </div>
        <div>
        <p className="uppercase">kontakt</p>
        <p>jb@spisehuset-kuto.dk</p>
        <p>Tlf. i caféen: +45 49 28 37 51</p>
        </div>
        <div>
        <p className="uppercase">Åbningstider</p>
        <p>mandag - fredag 9:00 - 17:00 </p>
        <p>lørdag - søndag 10:00 - 17:00</p>
        </div>
      </div>

<div>
      <div className="mx-auto my-10 flex flex-col gap-4 w-[90%] ">
        <h1 className="uppercase">
          Spisekammeret <br />
          i toldkammeret
        </h1>
        <p>Spisekammeret er Toldkammerets hjerte – byens hjertekammer.  Spisekammeret er åbent alle hverdage fra kl. 16.00-20.00, samt i  forbindelse med arrangementer og koncerter</p>
        <div className="flex justify-end">
        <Link href={`https://spisekammeret.dk/`} target ="_blank "className="block">
            <Button>Besøg Spisekammeret</Button>
            </Link>
          </div>
          </div>
        <Image
  src="/mad-spisekammeret.png"
  alt="Spisehuset"
  width={800}
  height={500}
  className="h-[260px] w-[90%] object-cover"
/>


        <div className="mx-auto flex w-[90%] my-8">
          <p>
          Der er fællesspisning i Toldkammeret på hverdage fra kl. 17.45-19.00.  Til fællesspisning sidder vi sammen, vi henter maden sammen, vi bærer ud af bordet sammen. Kort sagt, her er vi sammen om tingene – også selvom  du kommer alene.
          </p>

          </div>
</div>
   
       
      <div className="flex flex-col gap-6 mx-auto w-[90%] py-10 ">
        <div>
        <p>Forpagter Spisekammeret / Toldkammeret</p>
        <p>NC Spisekammeret</p>
        <p>Mads Hjalager</p>
        </div>
        <div>
        <p className="uppercase">kontakt</p>
        <p>mh@spisekammeret.dk / +45 53 74 75 76</p>
        <p>Tlf. i caféen: +45 49 28 20 52</p>
        </div>
        <div>
        <p className="uppercase">Åbningstider</p>
        <p>mandag - fredag 16:00 -19:30  </p>
        <p>lørdag - søndag Lukket</p>
        </div>
      </div>

    </main>
  );
}