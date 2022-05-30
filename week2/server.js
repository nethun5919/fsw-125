const express = require('express');
const app = express();

const PORT = 3000;
 let users = [
 {name: 'Topeka', state:'Kansas',nickname:'Sunflower state'},
 {name: 'Charlette',state:'North Carolina', nickname:'Tar Heel'},
 {name: 'Atlanta', state:'Georgia',nickname:'Hotlanta'},
 ];

app.get('/users', (req,res) => {
    res.send(users)
        
        
});  


app.listen(PORT, () =>{
    

      console.log('App started on port:${PORT}')
});