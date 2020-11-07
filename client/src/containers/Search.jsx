import { React, useState } from "react";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.css";
import BookCard from "../components/BookCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(search)
      .then((response) => {
        setResults(response.data.items);
        console.log(search);
        console.log(results);
        // console.log(response.data.items[0].volumeInfo.title);
        // console.log(response.data.items[0].volumeInfo.authors);
        // console.log(
        //   response.data.items[0].volumeInfo.imageLinks.smallThumbnail
        // );
        // console.log(response.data.items[0].volumeInfo.description);
        // console.log(response.data.items[0].selfLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <form>
          <div className="form-group row">
            <label htmlFor="inputSearch" className=" col-form-label">
              Search:
            </label>
            <div className="col-sm-10">
              <input
                type="search"
                name="search"
                className="form-control"
                id="inputSearch"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary mt-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3"></div>
      {results.map((book) => (
        <BookCard
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
        />
      ))}
    </div>
  );
};

export default Search;
