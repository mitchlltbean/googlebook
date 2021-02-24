import axios from "axios";

//www.googleapis.com/books/v1/volumes?q=search+terms &key=yourAPIKey

axios({
  method: "get",
  url:
    "https://www.googleapis.com/books/v1/volumes?q=Kujo&key=AIzaSyAAitSMk_mngIwAM_NJX1S1OQmK-TeEUcM",
  responseType: "stream",
}).then(function (response) {
  console.log(response, "!!!!!!!!!");
});

//TODO: api call on axios to google book api
