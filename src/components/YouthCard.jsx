import Image from "next/image";
import Link from "next/link";

const YouthCard = ({ id, image, title, description }) => {
  return (
    <Link href={`/ungdomsuddannelser/${id}`} className="block">
      <article className="flex flex-col gap-4">
        {image && (
          <Image
            src={image}
            alt={title || "Ungdomsuddannelse"}
            width={500}
            height={300}
            className="h-[170px] w-full rounded-md object-cover"
          />
        )}

        <h3 className="font-bold">{title}</h3>

        <p className="line-clamp-5">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default YouthCard;