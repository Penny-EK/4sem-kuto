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
    <Link href={`/event/${id}`} className="block h-full">
      <article className="flex h-[310px] flex-col pb-6">

        {/* TOP */}
        <div className="mx-auto mb-2 flex w-[90%] items-center justify-between">
          <small className="rounded bg-white/90 px-2 py-1">
            {date}
          </small>

          <Label variant="location">
            {location || "Lokation"}
          </Label>
        </div>

        {/* IMAGE */}
        <div className="relative mx-auto h-[300px] w-[90%] overflow-hidden rounded-2xl">
          {image && (
            <Image
              src={image}
              alt={title || "Event"}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="mx-auto mt-3 flex h-full w-[90%] flex-col">
          
          <h3 className="mb-2 line-clamp-2">
            {title}
          </h3>

          <small>
            {time} · {date} · {location}
          </small>

          {/* BOTTOM */}
          <div className="mt-auto flex w-full items-center justify-between pt-4">
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