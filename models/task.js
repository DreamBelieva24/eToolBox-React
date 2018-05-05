console.log("got to models")

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: { type: String, required: true },
  label: { type: String, required: false },
  completed: {type: Number},
  username: {type: String, required: true}
  
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
