// Home.jsx
import React from "react";
import UseFetch from "../hooks/UseFetch";
import errorimage from "../assets/error.svg";
import loaderimage from "../assets/ripples.svg";
import BookList from "../components/BookList";

const Home = () => {
  const {
    data: books,
    isLoading,
    error,
  } = UseFetch("http://localhost:3000/books");

  return (
    <div className="home">
      {error && (
        <div>
          <img src={errorimage} className="h-96 w-96 mx-auto" alt="Error" />
        </div>
      )}
      {isLoading && (
        <div>
          <img src={loaderimage} className="h-96 w-96 mx-auto" alt="Loading" />
        </div>
      )}
      {books && <BookList books={books} />}
    </div>
  );
};

export default Home;
