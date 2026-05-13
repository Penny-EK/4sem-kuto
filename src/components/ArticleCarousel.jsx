"use client";

import { useEffect, useRef, useState } from "react";
import ArticleCarouselCard from "@/components/ArticleCarouselCard";

import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";

const ArticleCarousel = ({ articles = [] }) => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getScrollStep = () => {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild;

    if (!track || !firstItem) {
      return 0;
    }

    return firstItem.getBoundingClientRect().width + 16;
  };

  const updateScrollState = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
  }, [articles]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const scrollStep = getScrollStep();

    if (!track) {
      return;
    }

    const atStart = track.scrollLeft <= 0;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      return;
    }

    track.scrollBy({
      left: direction * (scrollStep || track.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  return (
    <section className="">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Seneste nyt</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Forrige artikel"
          >
            <IoArrowBackSharp size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Næste artikel"
          >
            <IoArrowForwardSharp size={20} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {articles.slice(0, 5).map((article) => (
          <div key={article.id} className="snap-start">
            <ArticleCarouselCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleCarousel;
