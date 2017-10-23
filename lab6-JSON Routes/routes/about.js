const express = require('express');
const router = express.Router();
const aboutData = {
  "name": "Yi Ding",
  "biography": "biography one: paragraphs one. \n biography two: paragraphs two",
  "favoriteShows": ["Avatar: The Last Airbende", "Digimon Adventure", "The Walking Dead", "Fifty Shades of Greys"],
  "hobbies": ["Watching movie", "coding", "shopping"]
};


router.get("/", (req, res) => {
    res.json(aboutData);
});


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;