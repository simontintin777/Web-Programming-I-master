const express = require('express');
const router = express.Router();
const educationData = [
    {
      "schoolName": "First School Name",
      "degree": "First School Degree",
      "favoriteClass": "Favorite class in school",
      "favoriteMemory": "A memorable memory from your time in that school"
    },
    {
      "schoolName": "Second School Name",
      "degree": "Second School Degree",
      "favoriteClass": "Favorite class in school",
      "favoriteMemory": "A memorable memory from your time in that school"
    }
  ];


router.get("/", (req, res) => {
    res.json(educationData);
    });


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;