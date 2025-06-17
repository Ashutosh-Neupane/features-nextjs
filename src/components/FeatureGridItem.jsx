'use client';

import Image from 'next/image';

export default function FeatureGridItem({
  title,
  description,
  imageUrl,
  colSpan = 1,
  rowSpan = 1,
  index = 0,
  className = "",
}) {
  const colSpanClasses = {
    1: "md:col-span-2",
    1.5: "md:col-span-3",
    2: "md:col-span-4",
    3: "md:col-span-6",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  };

  const effectiveColSpan =
    className === "last" ? "md:col-span-6" : colSpanClasses[colSpan] || colSpanClasses[1];

  const effectiveRowSpan = rowSpanClasses[rowSpan] || rowSpanClasses[1];

  return (
    <div
      className={`
        ${effectiveColSpan} ${effectiveRowSpan}
        bg-white flex flex-col w-full max-w-[708px] mx-auto
        animate-fade-in-up overflow-hidden
      `}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      role="group"
      aria-label={title}
    >
      {/* Text Section */}
      <div className="px-4 py-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
          {title || "Untitled Feature"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-medium mb-4">
          {description || "No description provided."}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-grow px-4 pb-4">
        <div className="w-full h-full aspect-[4/3] overflow-hidden rounded-xl relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title || "Feature image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-xs italic rounded-xl">
              No image available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
