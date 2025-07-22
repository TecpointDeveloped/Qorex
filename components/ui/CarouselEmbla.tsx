"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    src: "/BH01.jpg",
    alt: "Imagen 1",
  },
  {
    src: "/langsdom_banner.webp",
    alt: "Imagen 2",
  },
  {
    src: "/banner_chargers_powerpeak_grey.webp",
    alt: "Imagen 3",
  },
  {
    src: "/BANNERSITE_POWERPEAK_BATTERYPACK.webp",
    alt: "Imagen 3",
  },
  {
    src: "/banner_hoco.jpg",
    alt: "Imagen 3",
  }
];

export default function CarouselEmbla() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-white h-fit flex items-center justify-center">
      <div className="w-full flex flex-col items-center relative">
        {/* Carrusel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex w-full">
            {slides.map((slide, index) => (
              <div
                className="w-full flex items-center justify-center"
                key={index}
              >
                <div className="bg-white w-[100vw] h-[80vh] flex items-center justify-center">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1200}
                    height={800}
                    quality={100}
                    priority
                    loading="eager"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles y puntos abajo */}
        <div className="mt-4 w-full flex justify-between items-center gap-2 px-4 z-10 absolute bottom-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={scrollPrev}
              className="bg-transparent rounded-full p-2 text-white hover:bg-gray-400 opacity-40 cursor-pointer"
            >
              <ChevronLeft color="black" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-transparent rounded-full p-2 text-white hover:bg-gray-400 opacity-40 cursor-pointer"
            >
              <ChevronRight color="black" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === selectedIndex ? "bg-black" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
