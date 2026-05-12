"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Search({
  type = "all",
  placeholder: customPlaceholder,
}) {
  type = type.toLowerCase(); // Normalize the type for easier comparisons.

  // Use a custom placeholder when provided, otherwise fall back to a type-based label.
  const placeholder =
    customPlaceholder ||
    (type === "articles"
      ? "Søg i nyheder..."
      : type === "events"
        ? "Søg i events..."
        : `Søg i ${type === "all" ? "nyheder og events" : type}...`);

  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEmptyState, setShowEmptyState] = useState(false);

  useEffect(() => {
    const queryText = searchQuery.trim();

    if (queryText.length < 3) {
      setShowEmptyState(false);
      return;
    }

    if (articles.length === 0 && events.length === 0) {
      const timeoutId = window.setTimeout(() => {
        setShowEmptyState(true);
      }, 2000);

      return () => window.clearTimeout(timeoutId);
    }

    setShowEmptyState(false);
  }, [articles, events, searchQuery]);

  useEffect(() => {
    const loadData = async () => {
      const queryText = searchQuery.trim();
      // Used to exclude events that have already passed.
      const now = new Date().toISOString();

      // Wait until the user has entered at least 3 non-space characters.
      if (queryText.length < 3) {
        setArticles([]);
        setEvents([]);
        setShowEmptyState(false);
        return;
      }

      setShowEmptyState(false);

      // Search articles in Supabase using full-text search first, then fall back if needed.
      if (type === "all" || type === "articles") {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .textSearch("fts", queryText, {
            type: "websearch",
            config: "english",
          })
          .order("article_date", { ascending: false });

        if (data && data.length > 0) {
          setArticles(data);
        } else {
          const { data: fallbackData, error: fallbackError } = await supabase
            .from("articles")
            .select("*")
            .or(
              `article_title.ilike.%${queryText}%,article_paragraf.ilike.%${queryText}%,article_bold.ilike.%${queryText}%`,
            )
            .order("article_date", { ascending: false });

          setArticles(fallbackData || []);
        }
      } else {
        setArticles([]);
      }

      // Search only upcoming events in Supabase using full-text search first, then fall back if needed.
      if (type === "all" || type === "events") {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .textSearch("fts", queryText, {
            type: "websearch",
            config: "english",
          })
          .gte("event_date", now)
          .order("event_date", { ascending: false });

        if (data && data.length > 0) {
          setEvents(data);
        } else {
          const { data: fallbackData, error: fallbackError } = await supabase
            .from("events")
            .select("*")
            .or(
              `event_name.ilike.%${queryText}%,event_description.ilike.%${queryText}%`,
            )
            .gte("event_date", now)
            .order("event_date", { ascending: false });

          setEvents(fallbackData || []);
        }
      } else {
        setEvents([]);
      }
    };

    loadData();
  }, [type, searchQuery]);

  return (
    <div className="relative">
      {/* Search field that triggers backend searches after the minimum query length is met. */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-10 w-full rounded-[5px] border border-slate-300 bg-white px-4 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      />
      {/* Only show results after 3 non-space characters have been entered. */}
      {searchQuery.trim().length >= 3 && (
        <ul className="absolute top-full left-0 mt-2 grid max-h-80 w-full gap-6 overflow-y-auto rounded-md border border-slate-300 bg-white p-4 shadow-lg">
          {showEmptyState ? (
            // This message appears 2 seconds after the search settles with no results.
            <li>Ingen resultater fundet</li>
          ) : (
            <>
              {/* Render matching events */}
              {events.map((event) => (
                <li
                  key={`event-${event.id}`}
                  className="border-b border-slate-300"
                >
                  <a href={`event/${event.id}`}>
                    <p className="font-bold">{event.event_name}</p>
                  </a>
                </li>
              ))}
              {/* Render matching articles */}
              {articles.map((article) => (
                <li
                  key={`article-${article.id}`}
                  className="border-b border-slate-300"
                >
                  <a href={`nyhed_artikel/${article.article_slug}`}>
                    <p className="font-bold">{article.article_title}</p>
                    <span className="line-clamp-2">{article.article_bold}</span>
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
}
