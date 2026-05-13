import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import SectionWrapper from "@/components/SectionWrapper";

export default async function Singleview({ params }) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("article_slug", slug)
    .maybeSingle();

  if (error || !article) {
    return <p>articleet kunne ikke findes.</p>;
  }

  return (
    <main className="contents">
      <SectionWrapper
        padding="py-0"
        innerClass=""
        gridPosition="col-start-[edge-start] col-end-[edge-end]"
      >
        {article.article_picture && (
          <Image
            src={article.article_picture}
            alt={article.article_title}
            width={400}
            height={300}
            className="col-start-1 col-end-6 h-auto max-h-100 w-full object-cover md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-3"
          />
        )}

        <div className="md:border-foreground col-start-2 col-end-4 w-full md:col-end-5 md:mb-4 md:flex md:flex-row-reverse md:items-end md:justify-end md:gap-4 md:border-b md:pb-4">
          <p className="font-['Open_Sans'] text-xs font-semibold text-black">
            {article.article_date}
          </p>
          <h1 className="max-w-80%">{article.article_title}</h1>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        {article.article_bold && (
          <section className="m-auto w-[90vw] max-w-300">
            <div className="py-7 font-bold whitespace-pre-line">
              {article.article_bold}
            </div>
            <div className="whitespace-pre-line">
              {article.article_paragraf}
            </div>
          </section>
        )}
      </SectionWrapper>
    </main>
  );
}
