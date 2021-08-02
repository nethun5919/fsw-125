const express = require('express')
const app = express()
const todoRouter = require('./personRouter');


app.use(express.json())


const PORT = 4000;
 
 app.use('/person', personRouter)


app.listen(PORT, () =>{
    

      console.log('App started on port:${PORT}')
});
