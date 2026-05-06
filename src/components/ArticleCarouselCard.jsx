import Image from "next/image";
const ArticleCarouselCard = ({ article }) => {
  return (
    <article className="grid w-59 gap-3">
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
          className="aspect-video h-auto w-59 bg-gray-300"
          aria-label="No article image"
        />
      )}
      <h2>{article.article_title}</h2>
      <p className="line-clamp-5">{article.article_bold}</p>
    </article>
  );
};

export default ArticleCarouselCard;
