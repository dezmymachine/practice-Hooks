import React from "react";

const BookPage = () => {
  return (
    <div className="mx-auto border text-center">
      <h1 className="underline underline-offset-4 text-red-900">
        {book.title}
        <p>Written by:{book.author}</p>
        <p>Overview:{book.description}</p>
      </h1>
    </div>
  );
};

export default BookPage;
