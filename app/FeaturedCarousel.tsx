"use client";

import { useRef, useState } from "react";

type FeaturedProject = {
  title: string;
  year: string;
  type: string;
  image?: string;
  description: string;
};

type FeaturedCarouselProps = {
  projects: FeaturedProject[];
};

export function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (nextIndex: number) => {
    const boundedIndex = (nextIndex + projects.length) % projects.length;
    setActiveIndex(boundedIndex);
    slideRefs.current[boundedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const updateActiveSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    const closest = slideRefs.current.reduce(
      (current, slide, index) => {
        if (!slide) return current;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - slideCenter);
        return distance < current.distance ? { index, distance } : current;
      },
      { index: activeIndex, distance: Number.POSITIVE_INFINITY },
    );

    if (closest.index !== activeIndex) {
      setActiveIndex(closest.index);
    }
  };

  return (
    <div className="featured-carousel">
      <div className="featured-controls" aria-label="Show Reel slide controls">
        <button
          className="carousel-button"
          type="button"
          aria-label="Previous featured work"
          onClick={() => goToSlide(activeIndex - 1)}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="featured-dots" aria-hidden="true">
          {projects.map((project, index) => (
            <span
              className={index === activeIndex ? "is-active" : ""}
              key={project.title}
            />
          ))}
        </div>
        <button
          className="carousel-button"
          type="button"
          aria-label="Next featured work"
          onClick={() => goToSlide(activeIndex + 1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div
        className="featured-slider"
        aria-label="Featured Banana Sound Studio posters"
        ref={sliderRef}
        onScroll={updateActiveSlide}
      >
        {projects.map((project, index) => (
          <article
            className="featured-slide"
            key={project.title}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
          >
            {project.image ? (
              <>
                <img
                  className="featured-backdrop"
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="featured-poster"
                  src={project.image}
                  alt={`${project.title} poster`}
                />
              </>
            ) : null}
            <div className="featured-content">
              <div className="featured-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="featured-pill" href="#contact">
                Talk to studio
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
