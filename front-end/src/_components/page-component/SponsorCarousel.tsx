"use client";
import { SvgChevronLeft, SvgChevronRight } from "../svgs";
import { sponsors } from "@/src/_data/sponsors";
import { useState, useEffect } from "react";
import Image from "next/image";

const VISIBLE_COUNT = 3;

const SponsorCarousel = () => {
  const maxPage = Math.max(sponsors.length - VISIBLE_COUNT, 0);
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));
  const next = () => setPage((p) => (p >= maxPage ? 0 : p + 1));

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [maxPage]);


  return (
    <section className="flex flex-col gap-10 p-12">
      <h2 className="text-center text-4xl font-bold">Sponsors</h2>

      <div className="flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="carousel-nav-btn"
          aria-label="Previous sponsors"
        >
          <SvgChevronLeft />
        </button>

        {/* Sponsor cards */}
        <div className="flex-1 overflow-hidden">
          <div
            className="grid gap-6 px-4 py-4 transition-transform duration-500 ease-in-out"
            style={{
              gridTemplateColumns: `repeat(${sponsors.length}, 1fr)`,
              width: `${(sponsors.length / VISIBLE_COUNT) * 100}%`,
              transform: `translateX(${-(page * (100 / sponsors.length))}%)`,
            }}
          >
            {sponsors.map((sponsor, idx) => (
                <a key={idx} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="card relative aspect-video overflow-hidden">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 33vw"
                      priority={idx < VISIBLE_COUNT}
                      className="object-cover scale-y-[1.15]"
                    />
                </a>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="carousel-nav-btn"
          aria-label="Next sponsors"
        >
          <SvgChevronRight />
        </button>
      </div>

      {/* Dots */}
      {maxPage > 0 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`dot ${i === page ? "dot-active" : "dot-inactive"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SponsorCarousel;
