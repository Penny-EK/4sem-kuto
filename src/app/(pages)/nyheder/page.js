import { Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/ArticleCard";
import ArticleCarousel from "@/components/ArticleCarousel";
import Search from "@/components/Search";
import SectionWrapper from "@/components/SectionWrapper";

export default async function Home() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("article_date", { ascending: false });

  return (
    <main className="contents">
      <SectionWrapper>
        <h1 className="flex items-end justify-end">Nyheder</h1>
        <ArticleCarousel articles={articles} />
      </SectionWrapper>
      <SectionWrapper>
        <Suspense fallback={<p>Indlæser nyheder...</p>}>
          <Search type="articles" />
          <section className="mt-6 grid gap-6 md:grid-cols-3">
            {!articles || articles.length === 0 ? (
              <p>Ingen artikler fundet</p>
            ) : (
              articles.map((article) => (
                <EventCard
                  key={article.id}
                  id={article.id}
                  slug={article.article_slug}
                  image={article.article_picture}
                  title={article.article_title}
                  date={article.article_date}
                  time={article.article_time}
                  location={article.article_location}
                  price={article.article_price}
                />
              ))
            )}
          </section>
        </Suspense>
      </SectionWrapper>
    </main>
  );
}
