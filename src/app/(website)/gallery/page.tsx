"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";

const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Gallery</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            A visual <span className="italic text-[#B69A65]">journey.</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#E8DCCB] sticky top-[89px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-body font-medium tracking-wide transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#243C32] text-[#F8F5EF] border-[#243C32]"
                  : "bg-transparent border-[#E8DCCB] text-[#262622] hover:border-[#243C32]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-[#F8F5EF] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#243C32]/0 group-hover:bg-[#243C32]/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-body text-white">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#B69A65] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
