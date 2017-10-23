const todoItems = require("./todo");
const connection = require("./mongoConnection");

let addFirstTask = todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?").then((task1) => {
    console.log("First task has been created! And the first task is:");
    console.log(task1);
    let addSecondTask = todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?").then((task2) => {
        console.log();
        console.log();
        console.log("Second task has been created!");
        let allTasks1 = todoItems.getAllTasks().then((allTasks1) => {
            console.log();
            console.log("=============================================");
            console.log("Two tasks are:"); 
            console.log(allTasks1);
        });
        return {
            first: task1,
            second: task2
        } 

    }).then((tasks) => {
        let removeFirstTask = todoItems.removeTask(tasks.first._id).then((deletionInfo) => {
            console.log();
            console.log("First task has been removed!");
        
            let alltask2 = todoItems.getAllTasks().then((remainingTask) => {
                console.log();
                console.log("=============================================");
                console.log("The remaining task is:"); 
                console.log(remainingTask);
                return remainingTask;
        }).then((remainingTask) => {
                let completeRemainingTask = todoItems.completeTask(remainingTask[0]._id).then((newTask2) => {
                    console.log();
                    console.log("=============================================");
                    console.log("Second task is completed:");
                    console.log(newTask2);
                    
                }).catch().then(() => {
                    return connection();
                }).then((db)=>{
                    return db.close();
                });
            });
        });
    });    
});

// let remove = todoItems.removeAll();

