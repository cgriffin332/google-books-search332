import React from "react";

const BookCard = ({ title, authors, image, description }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="float-left">{title}</h3>
          <button type="button" className="btn btn-success float-right">
            Save
          </button>
          <button type="button" className="btn btn-primary float-right">
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
          <img src={image} alt={title} />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
