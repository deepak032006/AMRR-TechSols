import React from 'react';

export default function ItemCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border p-4 rounded shadow hover:bg-gray-100"
    >
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={item.coverImage}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h2 className="mt-2 font-semibold text-center">{item.name}</h2>
    </div>
  );
}
