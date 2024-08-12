import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
  ];

  // Add a duplicate of the first slide at the end for seamless transition
  const extendedSlides = [...slides, slides[0]];
  const slideCount = slides.length;
  const transitionDuration = 1000; // Transition duration in milliseconds
  const intervalDuration = 3000; // Interval duration in milliseconds

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === slideCount) {
      setCurrentSlide(0); // Reset to the first slide
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [slideCount]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(handleTransitionEnd, transitionDuration);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, currentSlide, slideCount]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${(currentSlide % (slideCount + 1)) * 100}%)`,
          transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
