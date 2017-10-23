const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const recipes = require("./recipes");
const uuid = require('node-uuid');

let exportedMethods = {
    getAllComments(recipeId) {
        return comments().then((commentCollection) => {
            return commentCollection.find({recipeId: recipeId}).toArray();
        });
    },
    getCommentById(id) {
        return comments().then((commentCollection) => {
            return commentCollection
                .findOne({ _id: id })
                .then((comment) => {
                    if (!comment)
                        throw "comment not found";
                    return comment;
                });
        });
    },
    addComment(recipeId, poster, comment) {
        return comments().then((commentCollection) => {
            return recipes
                .getRecipeById(recipeId)
                .then((recipe) => {
                    let newComment = {
                        recipeId: recipeId,
                        recipeTitle: recipe.title,
                        _id: uuid.v4(),
                        poster: poster,
                        comment: comment
                    };
                    recipes.addCommentToRecipe(recipeId, newComment._id, newComment.poster, newComment.comment);
                    return commentCollection.insertOne(newComment).then((newInsertInformation) => {
                        return newInsertInformation.insertedId;
                    }).then((newId) => {
                        return this.getCommentById(newId);
                    });
                })
            });
    },
    removeComment(id) {
        return this.getCommentById(id).then((comment) => {
            return comments().then((commentCollection) => {
                return commentCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw (`Could not delete comment with id of ${id}`)
                    }
                    else {
                        return recipes.removeCommentFromRecipe(comment.recipeId, id);
                    }
                });
            });
        });
    },
    updateComment(recipeId, commentId, updatedComment) {
        return comments().then((commentCollection) => {
            let updatedCommentData = {};

            if (updatedComment.poster) {
                updatedCommentData.poster = updatedComment.poster;
            }

            if (updatedComment.comment) {
                updatedCommentData.comment = updatedComment.comment;
            }

            let updateCommand = {
                $set: updatedCommentData
            }; 
            recipes.removeCommentFromRecipe(recipeId, commentId);  

            return commentCollection.updateOne({ _id: commentId }, updateCommand).then(() => {
                return this.getCommentById(commentId).then((newComment) => {
                    recipes.addCommentToRecipe(recipeId, newComment._id, newComment.poster, newComment.comment);
                    return newComment;
                });
            });        
        });
    },
}

module.exports = exportedMethods;