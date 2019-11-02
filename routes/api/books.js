const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" for Google Books API 
router.get("/google", (req, res) => {
    console.log(req);
    axios.get("https://www.googleapis.com/books/v1/volumes", {params: req.query})
    .then(({ data: { items } }) => res.json(items))
    // .then(results => console.log(results))
    .catch(err => res.status(422).json(err));
});

router.route("/")
    .post(booksController.create)
    .get(booksController.findAll);

router.route("/:id").delete(booksController.remove);

module.exports = router;