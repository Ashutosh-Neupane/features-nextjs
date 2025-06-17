"use client";

import Image from "next/image";
import clsx from "clsx";

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

  return (
    <div
      className={clsx(
        colSpanClasses[colSpan] || colSpanClasses[1],
        rowSpanClasses[rowSpan] || rowSpanClasses[1],
        "bg-white w-full flex flex-col h-full animate-fade-in-up overflow-hidden",
        className === "mobile-last" && "col-span-2"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      role="group"
      aria-label={title}
    >
      {/* Text Section */}
      <div className="px-4 py-3 font-sans">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
          {title || "Untitled Feature"}
        </h3>
        <p className="text-base font-normal text-black-900 mb-4">
          {description || "No description provided."}
        </p>
      </div>

      {/* Image Section */}
      <div className="px-4 pb-4 flex-1 flex rounded-xl">
        <div className="w-full h-full   min-h-[230px] overflow-hidden rounded-xl relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title || "Feature image"}
              fill
              className="object-cover  rounded-xl "
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
