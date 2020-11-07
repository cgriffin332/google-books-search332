import { React, useState } from "react";
import API from "./utils/API";

const Search = () => {
  const { search, setSearch } = useState("");
  const {results, setResults} = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(search)
      .then((response) => {
          setResults(response.data.items)
        console.log(response.data.items);
        console.log(response.data.items[0].volumeInfo.title);
        console.log(response.data.items[0].volumeInfo.authors);
        console.log(
          response.data.items[0].volumeInfo.imageLinks.smallThumbnail
        );
        console.log(response.data.items[0].volumeInfo.description);
        console.log(response.data.items[0].selfLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form>
      <div className="form-group row">
        <label HTMLfor="inputSearch" className="col-sm-2 col-form-label">
          Search:
        </label>
        <div class="col-sm-10">
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
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
