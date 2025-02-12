'use client';
// components/Carousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './caro.css';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carodiv">
      <div className="carousel-container">
        <Image
          src={images[currentIndex]}
          alt={`Event Image ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Navigation buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
      >
        &#8250;
      </button> */}
    </div>
  );
};

export default Carousel;
