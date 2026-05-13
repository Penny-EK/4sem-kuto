import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ id, slug, image, title, date }) => {
  const articlePath = slug;

  return (
    <article className="mb-6">
      <Link href={`/nyhed_artikel/${articlePath}`}>
        <div className="flex items-end justify-end">{date}</div>
        {image ? (
          <Image
            src={image}
            alt={title || "Article image"}
            width={400}
            height={300}
            className="aspect-video h-auto w-full rounded-[5px] object-cover"
          />
        ) : (
          <div
            className="aspect-video h-auto w-full bg-gray-300"
            aria-label="No article image"
          />
        )}
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <div className="flex items-end justify-end">
          <button className="underline underline-offset-4">LÆS MERE</button>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
