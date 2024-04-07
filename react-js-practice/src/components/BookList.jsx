import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {books.map((item) => (
        <div
          key={item.id}
          className="p-2 shadow-md m-2 rounded hover:scale-105"
        >
          <h2 className="font-bold text-emerald-900 underline underline-offset-4">
            {item.name}
          </h2>

          <p className="text-slate-500 text-opacity-2">
            Written by {item.author}
          </p>
          <p className="font-semi-bold text-sm text-red-500">
            Published in {item.year}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
