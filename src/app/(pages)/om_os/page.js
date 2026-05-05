import Image from "next/image";
import KVbuilding from "@/assets/KV-building.png";
import TKbuilding from "@/assets/TK-building.png";
import EmployeeListContainer from "@/components/EmployeeListContainer";
export default async function OmOs() {
  return (
    <main>
      <h1>To huse – én organisation</h1>
      <div id="KVsection">
        <h2>Kulturværftet</h2>
        <p>
          Kulturværftet er et moderne kulturcenter og et regionalt spillested
          centralt placeret i Kulturhavn Kronborg i Helsingør Kommune.
        </p>
        <p>
          Året rundt præsenterer Kulturværftet et bredt og mangfoldigt kulturelt
          program fra koncerter, foredrag, debatter, film, teater,
          familiearrangementer, værksteder, udstillinger samt møder og
          konferencer for erhvervslivet over til tv- og filmproduktioner,
          profilskabende begivenheder som internationalt orienterede festivaler
          og events.
        </p>
        <Image src={KVbuilding} alt="Kulturværftet" />

        <h3>Adresse</h3>
        <p>Allegade 2, 3000 Helsingør</p>
        <h3>Åbningstider</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4458.100851313558!2d12.609252440008527!3d56.035115739487665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523111936d2171%3A0xf3cbcf3b60041cfd!2sThe%20Culture%20Yard!5e0!3m2!1sen!2sdk!4v1777977213774!5m2!1sen!2sdk"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="TKsection">
        <h2>Toldkammeret</h2>
        <p>
          Toldkammeret er KUTO’s uformelle samlingspunkt for fællesskab og
          oplevelser.
        </p>
        <p>
          Her kan du opleve alt fra fællesspisning og film til workshops og
          sociale events i en afslappet og intim ramme. Det er et sted, hvor du
          nemt kan kigge forbi, møde nye mennesker og være en del af noget -
          uden at det kræver planlægning.
        </p>
        <Image src={TKbuilding} alt="Toldkammeret" />

        <h3>Adresse</h3>
        <p>Havnepladsen 1, 3000 Helsingør</p>
        <h3>Åbningstider</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.2242877447003!2d12.613210378407354!3d56.03449117819393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465231e4eaf4712b%3A0xd226e0856478d306!2sToldkammeret!5e0!3m2!1sen!2sdk!4v1777977527643!5m2!1sen!2sdk"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*  */}
      {/*  */}
      {/* Indsæt FAQ */}
      {/*  */}
      {/*  */}
      <div>
        <h2>Kontakt</h2>
        <dl>
          <dt className="font-bold">billetkøb</dt>
          <dd className="">+45 49 28 11 55</dd>
          <dd>Hverdage fra kl. 10.00 – 13.00</dd>
          <dt>Send mail til: billet@kuto.dk</dt>
          <dt className="font-bold">Kulturværftets reception</dt>
          <dd className="mb-4">+45 49 28 36 20</dd>
          {/* contact spisehuset */}
          <dt className="font-bold">Forpagter Spisehuset / Kulturværftet</dt>
          <dd className="mb-4">Brammers Menuer / Jeanne Brammer</dd>
          <dd>bm@festmad.dk</dd>
          <dd>Tlf. i caféen: +45 49 28 37 51</dd>
          {/* contact spisekammeret */}
          <dt className="font-bold">Forpagter Spisekammeret / Toldkammeret</dt>
          <dd>NC spisekammeret</dd>
          <dd>Mads Hjalager</dd>
          <dd>mh@spisekammeret.dk</dd>
          <dd>+45 53 74 75 76</dd>
          <dd>Tlf. i caféen: +45 49 28 20 52</dd>
        </dl>
      </div>
      {/* employee list */}
      <EmployeeListContainer />
    </main>
  );
}
