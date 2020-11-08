import axios from "axios";


export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=AIzaSyCADjOrdOYFhaDKFovVlkTcAUjD1A3SSWs`,
    });
  }
};