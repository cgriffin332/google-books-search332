import React from "react";

const Search = () => {
  return (
    <form>
      <div class="form-group row">
        <label for="inputSearch" class="col-sm-2 col-form-label">
          Search:
        </label>
        <div class="col-sm-10">
          <input
            type="search"
            name="search"
            class="form-control"
            id="inputSearch"
            placeholder="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
