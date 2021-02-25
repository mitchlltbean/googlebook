const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const axios = require("axios");

//www.googleapis.com/books/v1/volumes?q=search+terms &key=yourAPIKey

//TODO: api call on axios to google book api
router.post("/", (req, res) => {
  console.log(req.body, "@@@@@@@");
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.body.searchTerm)
    .then(function (response) {
      // console.log(response.data, "!!!!!!!!!!");
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err, "!!!!!!!!");
      res.status(500).json(err);
    });
});

// // Matches with "/api/books"
// router.route("/").get(booksController.findAll).post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
