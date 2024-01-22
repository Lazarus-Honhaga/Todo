const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo} = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

//post endpoint for creating a todo.
app.post('/todo', async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //To put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "Todo created"
    })
});

//get endpoint for editing all todo.
app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

//put endpoint for marking a todo as completed.
app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })
    res.json({
        msg:"Todo marked a complete"
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});