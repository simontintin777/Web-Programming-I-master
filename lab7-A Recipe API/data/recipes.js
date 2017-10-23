const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const comments = mongoCollections.comments;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}).toArray().then((recipeList) => {
                let recipeListData = [];
                let length = recipeList.length;
                
                for (let i = 0; i < length; i++) {
                    let recipe = recipeList[i];
                    let content = {
                        _id: recipe._id,
                        title: recipe.title
                    }
                    recipeListData.push(content);
                }
                return recipeListData;
                
            });
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) throw "recipe not found";
                return recipe;
            });
        });
    },
    addRecipe(title, ingredients, steps) {
        return recipes().then((recipeCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };
            return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipe with id of ${id}`)
                }
                else {
                    return comments().then((commentCollection) => {
                        return commentCollection.remove({ recipeId: id });
                    });
                }
            });
        });
    },
    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipeCollection) => {
            let recipeUpdateInfo = {};

            if (updatedRecipe.title) {
                recipeUpdateInfo.title = updatedRecipe.title;
            }

            if (updatedRecipe.ingredients) {
                recipeUpdateInfo.ingredients = updatedRecipe.ingredients;
            }

            if (updatedRecipe.steps) {
                recipeUpdateInfo.steps = updatedRecipe.steps;
            }

            let updateCommand = {
                $set: recipeUpdateInfo
            };

            return recipeCollection.updateOne({ _id: id }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
    addCommentToRecipe(recipeId, commentId, poster, comment) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.updateOne({ _id: recipeId }, {
                $addToSet: {
                    comments: {
                        _id: commentId,
                        poster: poster,
                        comment: comment
                    }
                }
            });
        });
    },

    removeCommentFromRecipe(id, commentId) {
         return recipes().then((recipeCollection) => {
            return recipeCollection.updateOne({ _id: id }, {
                $pull: {
                    comments: {
                        _id: commentId
                    }
                }
            });
         });   
    }
}

module.exports = exportedMethods;