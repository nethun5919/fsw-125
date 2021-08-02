

const express = require('express')
const app = express()
const todoRouter = require('./todoRouter');


app.use(express.json())


const PORT = 4000;
 
 app.use('/todo', todoRouter)


app.listen(PORT, () =>{
    

      console.log(`App started on port:${PORT}`)
});


