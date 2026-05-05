import Image from "next/image";
import Link from "next/link";


const EventCard = ({ id, image, title, date, time, location, building, price }) => {
  return (
<Link href={`/event/${id}`} className="block">
    <article className="mb-6 pb-6">
      <div className="mx-auto mb-2 flex w-[90%] items-center justify-between">
        <small className="rounded bg-white/90 px-2 py-1">{date}</small>

        <small className="rounded-md bg-yellow-300 px-3 py-1 uppercase">
          {building || "Lokation"}
        </small>
      </div>

      <div className="relative mx-auto h-[220px] w-[90%] overflow-hidden rounded-2xl">
        {image && (
          <Image
            src={image}
            alt={title || "Event"}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="mx-auto mt-3 w-[90%]">
        <h3 className="mb-2">{title}</h3>

        <div className="flex items-end justify-between">
          <div>
            <small>
              {time} · {date} ·  {location}
            </small>
           
          </div>

          
        </div>
        <div className="mx-auto mb-2 flex w-[100%] items-center justify-between">
        {price && <small className="mt-1 block">{price}</small>}
        <button className="underline underline-offset-4">LÆS MERE</button>
      </div>
      </div>
    </article>
    </Link>
  );
};


export default EventCard;