import React, { useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';

interface Image {
  src: string;
  title: string;
  category: string;
}

interface Props {
  images: Image[];
}

export default function FilterableGallery({ images }: Props) {
  
  const categories = useMemo(() => ['All', ...Array.from(new Set(images.map(img => img.category)))], [images]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);

  const baseButtonClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeButtonClass = "bg-[#6d584f] text-white hover:bg-[#5a473f]";
  const inactiveButtonClass = "bg-gray-200 text-black";

  const breakpointColumnsObj = useMemo(() => {
    const numImages = filteredImages.length;
    if (numImages === 0) {
      return { default: 4, 1100: 3, 700: 2, 500: 1 };
    }
    return {
      default: Math.min(4, numImages),
      1100: Math.min(3, numImages),
      700: Math.min(2, numImages),
      500: Math.min(1, numImages),
    };
  }, [filteredImages.length]);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12 mt-8">
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

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}