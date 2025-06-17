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
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(undefined);
  
  const baseButtonClass = "cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeButtonClass = "cursor-pointer bg-[#6d584f] text-white hover:bg-[#5a473f]";
  const inactiveButtonClass = "cursor-pointer bg-gray-200 text-black";

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);

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
      {filteredImages.map((image, idx) => (
        <div
        key={image.src}
        className="overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setSelectedImageIdx(idx)}
        >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        </div>
      ))}
      </Masonry>

      {/* Popup Modal */}
      {typeof selectedImageIdx === 'number' && filteredImages[selectedImageIdx] && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
        onClick={() => setSelectedImageIdx(undefined)}
      >
        <div
        className="relative backdrop-blur-md rounded-lg  p-4 max-w-3xl w-full"
        onClick={e => e.stopPropagation()}
        >
        <button
          className="cursor-pointer absolute top-2 right-2 text-gray-500 hover:text-red-300 bg-white/80 hover:bg-red-100 rounded-full w-6 h-6 flex items-center justify-center text-4xl shadow"
          onClick={() => setSelectedImageIdx(undefined)}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={filteredImages[selectedImageIdx].src}
          alt={filteredImages[selectedImageIdx].title}
          className="w-full h-auto object-contain max-h-[70vh] mx-auto"
        />
        </div>
      </div>
      )}
    </div>
  );
}