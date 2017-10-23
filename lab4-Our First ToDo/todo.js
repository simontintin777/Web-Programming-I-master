const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidV4 = require('uuid/v4');

let exportedMethods = {
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getAllTasks() {
        return todoItems().then((todoItemsCollection) => {
            return todoItemsCollection.find({}).toArray();
        });    
    },
    getTask(id) {
        if (!id)
            return Promise.reject("You must provide an id to search for");

        return todoItems().then((itemsCollection) => {
            if (!itemsCollection.findOne({ _id: id }))
                return Promise.reject("The task does not exist");

            return itemsCollection.findOne({ _id: id });
        });
    },
    createTask(title, description) {
        if (!title) 
            return Promise.reject("You must provide a title for your task");
        
        if (!description) 
            return Promise.reject("You must provide a description for your task");
        
        return todoItems().then((todoItemsCollection) => {
            
            let newTask = {
                _id: uuidV4(),
                title: title,
                description: description,
                complete: false,
                completedAt: null
            };

            return todoItemsCollection
                .insertOne(newTask)
                .then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    return this.getTask(newId);
                });
        });
    },
    removeTask(id) {
        if (!id) 
            return Promise.reject("You must provide an id to remove");
        
        return todoItems().then((todoItemsCollection) => {
            return todoItemsCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject(`Could not remove task with id of ${id}`);
                    }
                });
        });
    },
    removeAll() {
        return todoItems().then((todoItemsCollection) => {
            return todoItemsCollection.remove({}).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`nothing to delete`);
                }
            });
        });
    },
    completeTask(taskId) {
        if (!taskId) 
            return Promise.reject("You must provide an id to complete task");
    
        return todoItems().then((todoItemsCollection) => {
            return this.getTask(taskId)
                .then((task) => {
                    task.complete = true;
                    let date = new Date();
                    task.completedAt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    
                    return todoItemsCollection.updateOne({
                        _id: taskId
                    }, task).then(() => {
                        return this.getTask(taskId);
                    });
            });
        });
    }
}

module.exports = exportedMethods;