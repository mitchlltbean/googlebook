const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/", apiRoutes);

//get route to return all saved books as JSON
router.get("/api/books", (req, res) => {
  console.log(req.body, "@@@@@@@");
});

//post route used to save new book to database
router.post("/api/books", (req, res) => {
  console.log(req.body, "@@@@@@@");
});

//delete route used to delete book from mongo by "_id"
router.delete("/api/books/:id", (req, res) => {
  console.log(req.body, "@@@@@@@");
});

//delete route used to delete book from mongo by "_id"
router.get("*", (req, res) => {
  console.log(req.body, "@@@@@@@");
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
