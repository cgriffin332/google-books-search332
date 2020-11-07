import axios from "axios";
import { default as config } from "./config";

export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=${config}`,
    });
  },
  getAllBooks: function () {
    return axios.get("/api/books");
  },
};
