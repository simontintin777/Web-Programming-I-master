const express = require('express');
const router = express.Router();
const storyData = {
  "storyTitle": "Story Title",
  "story": "Your story"
};


router.get("/", (req, res) => {
    res.json(storyData);
    });


router.post("/", (req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;