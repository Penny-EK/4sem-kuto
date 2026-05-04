import Image from "next/image";

const EventCard = ({ image, title, date, time, location, building, price }) => {
  return (
    <article className="mb-6 border-b border-neutral-200 pb-6">
        <div className="relative mx-auto w-[92%] ">
        <span className="bg-white/90 px-2 py-1 text-xs font-medium rounded">
            {date}
          </span>

          <span className="bg-yellow-300 px-3 py-1 text-xs font-semibold uppercase rounded-md">
            {building || "Lokation"}
          </span>
        </div>
        
      {/* IMAGE */}
      <div className="relative mx-auto w-[90%] h-[220px] overflow-hidden rounded-2xl">

        {image && (
          <Image
            src={image}
            alt={title || "Event"}
            fill
            className="object-cover"
          />
        )}

        
      </div>

      {/* TEXT */}
      <div className="mx-auto mt-3 w-[92%]">

        <h3 className="text-xl font-medium leading-tight mb-2">
          {title}
        </h3>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-neutral-700">
              {time} · {date}
            </p>
            <p className="text-sm text-neutral-700">
              {location}
            </p>
          </div>

          <button className="text-sm uppercase underline underline-offset-4">
            Læs mere
          </button>
        </div>

        {price && (
          <p className="mt-1 text-sm font-medium">
            {price}
          </p>
        )}
      </div>

    </article>
  );
};

export default EventCard;