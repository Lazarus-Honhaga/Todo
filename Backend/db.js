const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");

//To create Schema.
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

//To create Model.
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}