"use client";

import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import property1 from "/property1.png";
import property2 from "/property2.png";
import property3 from "/property3.png";
import rental1 from "/rental1.png";
import rental2 from "/rental2.png";
import rental3 from "/rental3.png";

const PropertyDetailHeader = () => {
  const images = [property1, property2, property3, rental1, rental2, rental3];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([images[0], images[1]]);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (image) => {
    setSelectedImages((prev) => {
      if (prev.includes(image)) return prev;
      return [prev[1], image];
    });
  };

  return (
    <div className="relative">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/propertyDetail_bg.png')` }}
        aria-label="Property Detail Background"
      >
        {/* Navbar */}
        <div className="absolute left-0 top-[-2] z-10 w-full px-4 sm:px-12">
          <NavBar />
        </div>

        {/* Content Wrapper */}
        {/* Content Wrapper */}
        <div className="absolute left-1/2 mx-auto mt-32 flex w-[80%] max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-lg bg-white p-6 shadow-2xl">
          {/* Upper Carousel */}
          <div className="flex items-center justify-center space-x-2 rounded-xl border border-gray-700 p-3">
            <div className="flex w-full max-w-3xl space-x-2 overflow-hidden">
              {images
                .slice(carouselIndex, carouselIndex + 9)
                .map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Carousel Item"
                    className="h-32 w-32 cursor-pointer rounded hover:opacity-80" // Updated sizes
                    onClick={() => handleImageClick(image)}
                  />
                ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            {selectedImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Selected Item"
                className="h-96 w-96 rounded shadow-lg" // Updated sizes
              />
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button onClick={handlePrev} className="p-2">
              <Image
                src="/back_button.png"
                alt="Previous"
                className="h-8 w-8"
              />
            </button>
            <Image
              src="/indicator.png"
              alt="Indicator"
              className="hidden md:block"
            />
            <button onClick={handleNext} className="p-2">
              <Image src="/forward_button.png" alt="Next" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailHeader;
