"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Search({ type = "all" }) {
  type = type.toLowerCase(); // Normalize the type to lowercase for easier comparisons.

  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      // Load articles if type is "all" or "articles"
      if (type === "all" || type === "articles") {
        const { data } = await supabase
          .from("articles")
          .select("*")
          .order("article_date", { ascending: false });
        setArticles(data || []);
      }

      // Load events if type is "all" or "events"
      if (type === "all" || type === "events") {
        const { data } = await supabase
          .from("events")
          .select("*")
          .order("event_date", { ascending: false });
        setEvents(data || []);
      }
    };

    loadData();
  }, [type]);

  // Filter articles based on search query (only if 3+ characters)
  const filteredArticles =
    type === "events" || searchQuery.length < 3
      ? []
      : searchQuery
        ? articles.filter((article) => {
            const query = searchQuery.toLowerCase();
            return (
              (article.article_title || "").toLowerCase().includes(query) ||
              (article.article_paragraf || "").toLowerCase().includes(query) ||
              (article.article_bold || "").toLowerCase().includes(query)
            );
          })
        : articles;

  // Filter events based on search query (only if 3+ characters)
  const filteredEvents =
    type === "articles" || searchQuery.length < 3
      ? []
      : searchQuery
        ? events.filter((event) => {
            const query = searchQuery.toLowerCase();
            return (
              (event.event_title || "").toLowerCase().includes(query) ||
              (event.event_description || "").toLowerCase().includes(query)
            );
          })
        : events;

  return (
    <div>
      {/* Search field that updates the local state on every keystroke. */}
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-10 w-full rounded-[5px] border border-slate-300 bg-white px-4 text-sm text-slate-900 transition outline-none placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      />

      {/* Only show the result list after 3 characters have been typed. */}
      {searchQuery.length >= 3 && (
        <ul className="grid gap-6">
          {filteredArticles.length === 0 && filteredEvents.length === 0 ? (
            // This message appears when no results match the current query.
            <li>Ingen resultater fundet</li>
          ) : (
            <>
              {/* Render matching events */}
              {filteredEvents.map((event) => (
                <li key={`event-${event.id}`} className="border-b">
                  <a href={`event/${event.id}`}>
                    <p className="font-bold">{event.event_title}</p>
                    <span className="line-clamp-2">
                      {event.event_description}
                    </span>
                  </a>
                </li>
              ))}
              {/* Render matching articles */}
              {filteredArticles.map((article) => (
                <li key={`article-${article.id}`} className="border-b">
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
