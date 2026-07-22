"use client";

import { useEffect, useRef, useState } from "react";

type FeaturedProject = {
  title: string;
  year: string;
  type: string;
  image?: string;
  trailerId?: string;
  description: string;
};

type FeaturedCarouselProps = {
  projects: FeaturedProject[];
};

export function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollSliderTo = (index: number) => {
    const slider = sliderRef.current;
    const slide = slideRefs.current[index];
    if (!slider || !slide) return;

    const centeredLeft =
      slide.offsetLeft - (slider.clientWidth - slide.offsetWidth) / 2;

    slider.scrollTo({
      left: centeredLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (projects.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % projects.length;
        scrollSliderTo(nextIndex);
        return nextIndex;
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [projects.length]);

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

  const trailerThumbnail = (trailerId: string) =>
    `https://img.youtube.com/vi/${trailerId}/maxresdefault.jpg`;

  const trailerEmbed = (trailerId: string) =>
    `https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${trailerId}&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`;

  return (
    <div className="featured-carousel">
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
            {project.trailerId ? (
              <div className="featured-video-frame" aria-hidden="true">
                <img
                  className="featured-backdrop"
                  src={trailerThumbnail(project.trailerId)}
                  alt=""
                />
                {activeIndex === index ? (
                  <iframe
                    src={trailerEmbed(project.trailerId)}
                    title={`${project.title} trailer background`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    tabIndex={-1}
                  />
                ) : null}
              </div>
            ) : project.image ? (
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
              <a
                className="featured-pill"
                href={
                  project.trailerId
                    ? `https://www.youtube.com/watch?v=${project.trailerId}`
                    : "#contact"
                }
                target={project.trailerId ? "_blank" : undefined}
                rel={project.trailerId ? "noreferrer" : undefined}
              >
                {project.trailerId ? "Watch trailer" : "Talk to studio"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
