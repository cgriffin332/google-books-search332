import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedCard from "../components/SavedCard";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    axios.get("/api/books").then((response) => {
      // console.log(response.data);
      setAllBooks(response.data);
    });
  };

  return (
    <div>
      <h1>Saved Books</h1>
      <div className="col-3"></div>
      {allBooks ? (
        allBooks.map((book) => (
          <SavedCard
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.imageLinks}
            googleLink={book.infoLink}
          />
        ))
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                You currently have no saved books. Please search for your
                favorites and save them.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
