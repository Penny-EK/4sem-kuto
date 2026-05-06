import { Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/ArticleCard";
import ArticleCarousel from "@/components/ArticleCarousel";
import Search from "@/components/Search";

export default async function Home() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("article_date", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <main className="m-auto w-[90vw]">
      <h1 className="flex items-end justify-end">Nyheder</h1>
      <ArticleCarousel articles={articles} />

      <Suspense fallback={<p>Indlæser nyheder...</p>}>
        <Search placeholder="Søg i nyheder..." />
        {!articles || articles.length === 0 ? (
          <p>Ingen articler fundet</p>
        ) : (
          articles.map((article) => (
            <EventCard
              key={article.id}
              id={article.id}
              image={article.article_picture}
              title={article.article_title}
              date={article.article_date}
              time={article.article_time}
              location={article.article_location}
              price={article.article_price}
            />
          ))
        )}
      </Suspense>
    </main>
  );
}
