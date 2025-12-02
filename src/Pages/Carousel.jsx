import React, { useState } from "react";
import useCarouselFetch from "../hook/useCarouselFetch";

const Carousel = () => {
  const { Carousel } = useCarouselFetch();
  const slides = Carousel.data;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] object-contain overflow-hidden shadow-2xl">
      {slides?.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}>
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover filter blur-xs scale-110"
            />
            <div className="absolute inset-0 bg-[#1A252F]/30"></div>
          </div>
     
          <div className="absolute bottom-0  md:bottom-45 left-0 md:left-70 right-0 md:right-20  md:top-50 p-6 md:p-8 text-white md:text-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h1>
              <p className="text-lg mb-4">{slide.description}</p>
              <button
                onClick={nextSlide}
                className="bg-[#D4AF37] text-[#1A252F] py-2 px-6 rounded-full hover:bg-[#2E7D32] hover:text-[#F8F1F1] transition">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          onClick={prevSlide}
          className="btn shadow-none  bg-[#FFD93D] text-[#0F172A] rounded-full font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-30 border-none">
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn shadow-none  rounded-full bg-[#FFD93D] text-[#0F172A]  font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-30 border-none">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

