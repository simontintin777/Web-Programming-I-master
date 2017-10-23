const express = require('express');
const router = express.Router();
const data = require("../data");
const commentData = data.comments;
const recipeData = data.recipes;

router.get("/:commentId", (req, res) => {
    commentData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }).catch(() => {
        res.status(404).json({ error: "Comment not found" });
    });
});

router.get("/recipe/:recipeId", (req, res) => {
    commentData.getAllComments(req.params.recipeId).then((commentList) => {
        res.json(commentList);
    }, () => {
        res.sendStatus(500);
    });
});

router.post("/:recipeId", (req, res) => {
    let newCommentData = req.body;
    if (!newCommentData) {
        res.status(400).json({ error: "You must provide data to create a comment" });
        return;
    }

    if (!newCommentData.poster) {
        res.status(400).json({ error: "You must provide a poster" });
        return;
    }

    if (!newCommentData.comment) {
        res.status(400).json({ error: "You must provide a comment" });
        return;
    }
    commentData.addComment(req.params.recipeId, newCommentData.poster, newCommentData.comment)
        .then((newComment) => {
            res.json(newComment);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});

router.put("/:recipeId/:commentId", (req, res) => {
    let newCommentData = req.body
    let getComment = commentData.getCommentById(req.params.commentId).then(() => {
        return commentData.updateComment(req.params.recipeId, req.params.commentId, newCommentData)
            .then((newCommentList) => {
                res.json(newCommentList);
            }, (error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }).catch(() => {
        res.status(404).json({ error: "Comment not found" });
    });

});

router.delete("/:id", (req, res) => {
    let getComment = commentData.getCommentById(req.params.id);

    getComment.then(() => {
        return commentData.removeComment(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "comment not found" });
    });
});

module.exports = router;