import Image from "next/image";

// Assets
import KVbuilding from "@/assets/KV-building.png";
import TKbuilding from "@/assets/TK-building.png";

// components
import EmployeeListContainer from "@/components/EmployeeListContainer";
import Faq from "@/components/Faq";

// Icons

export default async function OmOs() {
  return (
    <main>
      <div>
        <h1 className="m-auto w-[90vw] max-w-300">To huse – én organisation</h1>

        <ul className="my-9.25 ml-17.5 grid gap-3 rounded-tl-[5px] rounded-bl-[5px] bg-[#1B1B1B] py-6 pl-8 text-white">
          <li>
            <a href="#kvSection">Kulturværftet</a>
          </li>

          <li>
            <a href="#tkSection">Toldkammeret</a>
          </li>
          <li>
            <a href="#faqSection">FAQ</a>
          </li>
          <li>
            <a href="#contactSection">Kontakt</a>
          </li>
          <li>
            <a href="#employeeSection">Medarbejdere</a>
          </li>
        </ul>
      </div>

      <div id="kvSection" className="py-9.25">
        <div className="m-auto w-[90vw] max-w-300">
          <h2>Kulturværftet</h2>
          <p>
            Kulturværftet er et moderne kulturcenter og et regionalt spillested
            centralt placeret i Kulturhavn Kronborg i Helsingør Kommune.
          </p>
          <p>
            Året rundt præsenterer Kulturværftet et bredt og mangfoldigt
            kulturelt program fra koncerter, foredrag, debatter, film, teater,
            familiearrangementer, værksteder, udstillinger samt møder og
            konferencer for erhvervslivet over til tv- og filmproduktioner,
            profilskabende begivenheder som internationalt orienterede
            festivaler og events.
          </p>
        </div>
        <Image src={KVbuilding} alt="Kulturværftet" className="my-6" />
        <div className="m-auto w-[90vw] max-w-300">
          <h3>Adresse</h3>
          <p>Allegade 2, 3000 Helsingør</p>
          <h3>Åbningstider</h3>
          <ul>
            <li>mandag 10:00 — 18:00</li>
            <li>tirsdag - onsdag 10:00 — 19:00</li>
            <li>torsdag 10:00 — 20:00</li>
            <li>fredag 10:00 — 18:00</li>
            <li>lørdag 10:00 — 16:00</li>
            <li>søndag 11:00 — 16:00</li>
          </ul>

          {/* Google maps embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4458.100851313558!2d12.609252440008527!3d56.035115739487665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523111936d2171%3A0xf3cbcf3b60041cfd!2sThe%20Culture%20Yard!5e0!3m2!1sen!2sdk!4v1777977213774!5m2!1sen!2sdk"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="my-6 w-full"
          ></iframe>
        </div>
      </div>

      {/* Toldkammeret */}
      <div id="tkSection" className="py-9.25">
        <div className="m-auto w-[90vw] max-w-300">
          <h2>Toldkammeret</h2>
          <p>
            Toldkammeret er KUTO’s uformelle samlingspunkt for fællesskab og
            oplevelser.
          </p>
          <p>
            Her kan du opleve alt fra fællesspisning og film til workshops og
            sociale events i en afslappet og intim ramme. Det er et sted, hvor
            du nemt kan kigge forbi, møde nye mennesker og være en del af noget
            - uden at det kræver planlægning.
          </p>
        </div>
        <Image src={TKbuilding} alt="Toldkammeret" className="my-6" />
        <div className="m-auto w-[90vw] max-w-300">
          <h3>Adresse</h3>
          <p>Havnepladsen 1, 3000 Helsingør</p>
          <h3>Åbningstider</h3>
          <ul>
            <li>mandag - fredag 16:00 — 19:30</li>
            <li>lørdag - søndag Lukket</li>
          </ul>
          {/* Google maps embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.2242877447003!2d12.613210378407354!3d56.03449117819393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465231e4eaf4712b%3A0xd226e0856478d306!2sToldkammeret!5e0!3m2!1sen!2sdk!4v1777977527643!5m2!1sen!2sdk"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="my-6 w-full"
          ></iframe>
        </div>
      </div>

      {/* FAQ */}
      <section id="faqSection" className="my-9.25 bg-[#F9F9F9] py-9.25">
        <div className="m-auto w-[90vw] max-w-300">
          <h2>FAQ</h2>
          <h3>- Ofte stillet spørgsmål</h3>
          <Faq title="Hvad er Kulturværftet?">
            <p>
              Vi har flere muligheder for at bestille billetter, herunder
              online, telefonisk og i vores lokaler.
            </p>
          </Faq>
          <Faq title="Hvad er Kulturværftet?">
            <p>
              Vi har flere muligheder for at bestille billetter, herunder
              online, telefonisk og i vores lokaler.
            </p>
          </Faq>
          <Faq title="Hvad er Kulturværftet?">
            <p>
              Vi har flere muligheder for at bestille billetter, herunder
              online, telefonisk og i vores lokaler.
            </p>
          </Faq>
        </div>
      </section>

      <div id="contactSection" className="m-auto w-[90vw] max-w-300 py-9.25">
        <h2>Kontakt</h2>
        <dl className="grid gap-6 md:grid-cols-3">
          <div className="contents gap-6 md:grid">
            {/* Contact Kulturværftet */}
            <div>
              <dt className="font-bold">Kulturværftet</dt>
              <dd>Alle dage 2, byg. 13, 3.etage</dd>
              <dd>3000 Helsingør</dd>
              <dd>Email: Info@kuto.dk</dd>
              <dd>+45 49 28 37 47</dd>
              <dd>Tlf. er åben alle dage fra 10.00 - 13.00</dd>
            </div>
            {/* Contact Toldkammeret/spisekammeret */}
            <div>
              <dt className="font-bold">Toldkammeret/spisekammeret</dt>
              <dd>Havnepladsen 1</dd>
              <dd>3000 Helsingør</dd>
              <dd>+45 29 28 20 52</dd>
            </div>
          </div>
          {/* Contact Tickets */}
          <div>
            <dt className="font-bold">Billetkøb</dt>
            <dd className="">+45 49 28 11 55</dd>
            <dd>Hverdage fra kl. 10.00 - 13.00</dd>
            <dd>Send mail til: billet@kuto.dk</dd>
            <dt className="">Kulturværftets reception: +45 49 28 36 20</dt>
          </div>

          <div className="contents gap-6 md:grid">
            {/* Contact spisehuset */}
            <div>
              <dt className="font-bold">
                Forpagter Spisehuset / Kulturværftet
              </dt>
              <dd className="">Brammers Menuer / Jeanne Brammer</dd>
              <dd>bm@festmad.dk</dd>
              <dd>Tlf. i caféen: +45 49 28 37 51</dd>
            </div>
            {/* Contact spisekammeret */}
            <div>
              <dt className="font-bold">
                Forpagter Spisekammeret / Toldkammeret
              </dt>
              <dd>NC spisekammeret</dd>
              <dd>Mads Hjalager</dd>
              <dd>mh@spisekammeret.dk</dd>
              <dd>+45 53 74 75 76</dd>
              <dd>Tlf. i caféen: +45 49 28 20 52</dd>
            </div>
          </div>
        </dl>
      </div>
      {/* employee list */}
      <div id="employeeSection" className="m-auto w-[90vw] max-w-300 py-9.25">
        <EmployeeListContainer />
      </div>
    </main>
  );
}
