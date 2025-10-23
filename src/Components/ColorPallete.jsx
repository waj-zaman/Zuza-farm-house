import React from "react";

export default function ColorPalette() {
  const colors = [
    { name: "Sunlit Yellow", hex: "#F6C84C" },
    { name: "Leafy Green", hex: "#4C956C" },
    { name: "Pool Blue", hex: "#4CA6F6" },
    { name: "Dark Wooden Brown", hex: "#5C3A21" },
    { name: "Soft Cream", hex: "#F7FFE0" },
    { name: "Warm White", hex: "#FFFDF7" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Warm & Inviting Color Palette
        </h2>
        <div className="flex flex-wrap gap-6">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-lg shadow-md mb-2"
                style={{ backgroundColor: color.hex }}
              ></div>
              <span className="text-gray-700 text-sm text-center">
                {color.name}
              </span>
              <span className="text-gray-500 text-xs">{color.hex}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
