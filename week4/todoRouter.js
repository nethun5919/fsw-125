const express = require("express");
const { v4: uuid } = require('uuid');
const todoRouter = express.Router()

let todos = [
    {
    "name": "get an oil change",
    "description":"go to JiffyLube",
     "completed": false,
    "_id": uuid()
},
{
    "name": "buy project paper and markers",
    "description": "help with school function",
     "completed": true,
     "_id": uuid()
},

{
    "name": "pack up sleeping bags and tents",
    "description":"goin camping",
     "completed":true,
    "_id": uuid()
}


];

todoRouter.route('/')
.get((req, res)=>{
    console.log(req.body);
    res.send(todos)
})

.post(( req, res) => {
    const newItem = req.body;
    newItem_id = uuid ();
    todos.push(newItem);

    res.send('adding new item')

})

.put((req,res) =>{
    const todoId = req.params.todoId;
    const singulertodo = todos.findIndex(todo === todo_Id);
   
    res.send('retrive todo')
})


.delete((req, res) =>{
const todoId = req.params.todoId;
const  todoIndex = todos.findIndex(todo => todo._id===todoId);
res.sendDate("delte complete")

})





module.exports = todoRouter;