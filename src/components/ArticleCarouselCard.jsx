import Image from "next/image";
import Link from "next/link";

const ArticleCarouselCard = ({ article }) => {
  const articlePath = article.article_slug || article.id;

  return (
    <Link href={`/nyhed_artikel/${articlePath}`} className="block">
      <article className="grid w-65 gap-3">
        {article.article_picture ? (
          <Image
            src={article.article_picture}
            alt={article.article_title || "Article image"}
            width={236}
            height={117}
            className="h-auto w-full rounded-[5px] object-cover"
          />
        ) : (
          <div
            className="aspect-video h-auto w-full bg-gray-300"
            aria-label="No article image"
          />
        )}
        <h3 className="">{article.article_title}</h3>
        <p className="line-clamp-5">{article.article_bold}</p>
      </article>
    </Link>
  );
};

export default ArticleCarouselCard;
