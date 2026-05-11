import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";

const EventCarouselCard = ({ event }) => {
  return (
    <Link href={`/event/${event.id}`} className="block">
      <article className="grid w-59 gap-3">
        {event.event_img ? (
          <Image
            src={event.event_img}
            alt={event.event_name || "Event image"}
            width={236}
            height={140}
            className="h-[140px] w-full rounded-[5px] object-cover"
          />
        ) : (
          <div
            className="h-[140px] w-59 rounded-[5px] bg-gray-300"
            aria-label="No event image"
          />
        )}

        <div className="flex items-center justify-between gap-2">
          <small>{event.event_date}</small>
          <Label variant="location">{event.event_location || "Lokation"}</Label>
        </div>

        <h2>{event.event_name}</h2>

        <small>
          {event.event_time} · {event.event_location}
        </small>
      </article>
    </Link>
  );
};

export default EventCarouselCard;