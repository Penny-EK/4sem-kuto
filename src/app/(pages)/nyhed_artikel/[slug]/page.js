import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function Singleview({ params }) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  console.log("SLUG:", slug);
  console.log("article:", article);
  console.log("ERROR:", error);

  if (error || !article) {
    return <p>articleet kunne ikke findes.</p>;
  }

  return (
    <main className="max-w-400 md:m-auto md:grid md:grid-cols-1">
      {article.article_picture && (
        <Image
          src={article.article_picture}
          alt={article.article_title}
          width={400}
          height={300}
          className="h-auto max-h-100 w-full object-cover"
        />
      )}
      <div className="md:border-foreground m-auto w-[90vw] md:order-first md:mb-4 md:flex md:flex-row-reverse md:items-end md:justify-end md:gap-4 md:border-b md:pb-4">
        <p className="font-['Open_Sans'] text-xs font-semibold text-black">
          {article.article_date}
        </p>
        <h1>{article.article_title}</h1>
      </div>

      {article.article_bold && (
        <section className="m-auto w-[90vw] max-w-300">
          <div className="py-7 font-bold whitespace-pre-line">
            {article.article_bold}
          </div>
          <div className="whitespace-pre-line">{article.article_paragraf}</div>
        </section>
      )}
    </main>
  );
}
