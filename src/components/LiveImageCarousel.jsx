"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "SOMMERKONCERT MED ZARPA",
    image: "/zapa.png",
  },
  {
    title: "FILMFESTIVAL: NORDISKE PERLER",
    image: "/film.png",
  },
  {
    title: "KUNSTUDSTILLING: FARVERNES MAGI",
    image: "/kunst.png",
  },
  {
    title: "TEATERFORESTILLING: HAMLET REMIX",
    image: "/hamlet.png",
  },
];

const getVisibleSlides = (activeIndex) => {
  return [
    slides[activeIndex],
    slides[(activeIndex + 1) % slides.length],
    slides[(activeIndex + 2) % slides.length],
    slides[(activeIndex + 3) % slides.length],
  ];
};

const LiveImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSlides = getVisibleSlides(activeIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (slide) => {
    const newIndex = slides.findIndex((item) => item.image === slide.image);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative hidden min-h-[360px] w-full md:block">
      {/* MAIN IMAGE */}
      <button
        type="button"
        onClick={() => handleClick(visibleSlides[0])}
        className="relative h-[180px] w-[60%] overflow-hidden rounded-xl transition-all duration-700 ease-in-out"
        
      >
        <Image
          src={visibleSlides[0].image}
          alt={visibleSlides[0].title}
          fill
          className="object-cover transition-all duration-700 ease-in-out"
        />
      </button>

      <h3 className="absolute top-14 right-[-20px] max-w-[220px] font-black uppercase text-black">
        {visibleSlides[0].title}
      </h3>

      {/* IMAGE 2 */}
      <button
        type="button"
        onClick={() => handleClick(visibleSlides[1])}
        className="absolute top-[150px] right-0 h-[140px] w-[48%] overflow-hidden rounded-xl transition-all duration-700 ease-in-out hover:scale-[1.02]"
      >
        <Image
          src={visibleSlides[1].image}
          alt={visibleSlides[1].title}
          fill
          className="object-cover"
        />
      </button>

      {/* IMAGE 3 */}
      <button
        type="button"
        onClick={() => handleClick(visibleSlides[2])}
        className="absolute top-[210px] left-8 h-[95px] w-[34%] overflow-hidden rounded-xl transition-all duration-700 ease-in-out hover:scale-[1.02]"
      >
        <Image
          src={visibleSlides[2].image}
          alt={visibleSlides[2].title}
          fill
          className="object-cover"
        />
      </button>

      {/* IMAGE 4 */}
      <button
        type="button"
        onClick={() => handleClick(visibleSlides[3])}
        className="absolute right-24 bottom-0 h-[115px] w-[42%] overflow-hidden rounded-xl transition-all duration-700 ease-in-out hover:scale-[1.02]"
      >
        <Image
          src={visibleSlides[3].image}
          alt={visibleSlides[3].title}
          fill
          className="object-cover"
        />
      </button>
    </div>
  );
};

export default LiveImageCarousel;