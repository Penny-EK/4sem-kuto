import { Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";
import EventCard from "@/components/ArticleCard";
import ArticleCarousel from "@/components/ArticleCarousel";
import Search from "@/components/Search";
import SectionWrapper from "@/components/SectionWrapper";

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getEventGroup(eventDateString) {
  const today = startOfDay(new Date());
  const startOfThisWeek = new Date(today);
  startOfThisWeek.setDate(today.getDate() - 7);

  const eventDate = startOfDay(new Date(`${eventDateString}T00:00:00`));

  if (eventDate >= startOfThisWeek && eventDate <= today) return "Denne uge";
  return "Ældre nyheder";
}

export default async function Home() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("article_date", { ascending: false });

  const groupedArticles = {
    "Denne uge": [],
    "Ældre nyheder": [],
  };

  articles?.forEach((article) => {
    const group = getEventGroup(article.article_date);
    groupedArticles[group].push(article);
  });

  const hasThisWeekArticles = groupedArticles["Denne uge"].length > 0;

  return (
    <main className="contents">
      <SectionWrapper>
        <h1 className="flex items-end justify-end">Nyheder</h1>
        <ArticleCarousel articles={articles} />
      </SectionWrapper>
      <SectionWrapper>
        <Suspense fallback={<p>Indlæser nyheder...</p>}>
          <Search type="articles" />
          {!articles || articles.length === 0 ? (
            <p>Ingen artikler fundet</p>
          ) : !hasThisWeekArticles ? (
            <section className="mt-6 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
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
              ))}
            </section>
          ) : (
            Object.entries(groupedArticles).map(([group, groupArticles]) =>
              groupArticles.length > 0 ? (
                <div key={group}>
                  <div className="my-8 w-full">
                    <h2 className="uppercase">{group}</h2>
                    <div className="mt-2 h-px w-screen bg-black md:left-0" />
                  </div>
                  <section className="grid gap-6 md:grid-cols-3">
                    {groupArticles.map((article) => (
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
                    ))}
                  </section>
                </div>
              ) : null,
            )
          )}
        </Suspense>
      </SectionWrapper>
    </main>
  );
}
