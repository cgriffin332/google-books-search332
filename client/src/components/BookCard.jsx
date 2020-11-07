import React from "react";

const BookCard = ({ title, authors, image, description }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="float-left">{title}</h3>
          <button type="button" class="btn btn-success float-right">
            Save
          </button>
          <button type="button" class="btn btn-primary float-right">
            View
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-left">
          <h6>Written by {authors}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img src="http://www.fillmurray.com/200/200" alt={title} />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
