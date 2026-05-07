import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default async function Mad() {
  return (
    <main>
      <div className="mx-auto my-8 flex w-[90%] flex-col gap-10">
        <h1 className="uppercase">Mad</h1>

        <h3>
          Kombiner dit besøg på Kulturværftet og i Toldkammeret med noget
          lækkert at spise. Vores køkkener og cafeer tilbyder både frokost,
          aftensmad, fællesspisninger og koncertmenuer, ligesom vi står for
          selskabsmenuen til det private arrangement og frokosten til
          netværksmødet. Se vores store og varierede udvalg her på siden.
        </h3>

    <div>
<Link href={`/event/${id}`} className="block">
<Button>Spisehuet</Button>
</Link>
<Link>
<Button>Spisekammeret</Button>
</Link>
    </div>
      </div>
    </main>
  );
}