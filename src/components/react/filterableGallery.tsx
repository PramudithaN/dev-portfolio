// src/components/react/FilterableGallery.tsx

import React, { useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';

// Define the structure of an image object
interface Image {
  src: string;
  title: string;
  category: string;
}

// Define the props for our component
interface Props {
  images: Image[];
}

export default function FilterableGallery({ images }: Props) {
  // Get a unique list of categories from the images, plus "All"
  const categories = useMemo(() => ['All', ...Array.from(new Set(images.map(img => img.category)))], [images]);

  // State to track the currently selected category
  const [activeCategory, setActiveCategory] = useState('All');

  // Memoized list of images to display based on the active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);

  // Style for the filter buttons
  const baseButtonClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeButtonClass = "bg-white text-black"; // Updated for better contrast as per images
  const inactiveButtonClass = "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"; // Updated for better contrast as per images

  // --- START OF THE FIX ---
  // Dynamically calculate masonry columns to prevent empty columns
  const breakpointColumnsObj = useMemo(() => {
    const numImages = filteredImages.length;
    if (numImages === 0) {
      return { default: 4, 1100: 3, 700: 2, 500: 1 }; // Default when no images
    }
    return {
      default: Math.min(4, numImages),
      1100: Math.min(3, numImages),
      700: Math.min(2, numImages),
      500: Math.min(1, numImages),
    };
  }, [filteredImages.length]);
  // --- END OF THE FIX ---

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-12 mt-8"> {/* Increased bottom margin */}
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${baseButtonClass} ${activeCategory === category ? activeButtonClass : inactiveButtonClass}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Image Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((image) => (
          // The key should be unique to the item, image.src is a good candidate
          <div key={image.src} className="overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105" // Added subtle hover effect
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}