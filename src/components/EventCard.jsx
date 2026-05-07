import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";

const EventCard = ({
  id,
  image,
  title,
  date,
  time,
  location,
  price,
}) => {
  return (
    <Link href={`/event/${id}`} className="block">
      <article className="mb-6 border-b border-neutral-200 pb-6">
        <div className="mx-auto mb-2 flex w-[90%] items-center justify-between">
          <small className="rounded bg-white/90 px-2 py-1">{date}</small>

          <Label variant="location">{location || "Lokation"}</Label>
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

          <small>
            {time} · {date} · {location}
          </small>

          <div className="mt-2 flex w-full items-center justify-between">
            {price && <small>{price}</small>}

            <span className="button-text underline underline-offset-4">
              Læs mere
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;