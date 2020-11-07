import React, { useState } from "react";
import axios from "axios";

const BookCard = ({ title, authors, image, description, googleLink }) => {
  const [newBook, setNewBook] = useState({
    title: title,
    authors: authors,
    image: image,
    description: description,
    googleLink: googleLink,
  });

  const handleSave = (e) => {
    axios.post("api/books", newBook).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
  };
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          <h3 className="float-left">{title}</h3>
          <button type="button" onClick={handleSave} className="btn btn-success float-right">
            Save
          </button>
          <a href={googleLink} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary float-right">
              View
            </button>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-left">
          <h6>Written by {authors}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img style={{"maxWidth": "100%"}}src={image} alt={title} />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
