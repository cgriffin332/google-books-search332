import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=${API_KEY}`,
    });
  }
};
