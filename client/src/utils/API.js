import axios from "axios";


export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=${process.env.REACT_APP_API_KEY}`,
    });
  }
};
