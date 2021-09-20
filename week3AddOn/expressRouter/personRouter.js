const express = require("express");
const { v4: uuid } = require('uuid');
 const personRouter = express.Router()


let person = [
    {
    fname: 'Thadious',
    lname: 'Cambel',
    living: true,
    bountyAmount:154,
    type: 'Sith',
    _id: uuid()
},
{
    fname: 'Calvin',
    lname: 'Hobs', 
    living: true,
    bountyAmount:139,
    type: 'Jedi',
    _id: uuid()
},

{
     fname: 'Cheryl',
    lname:  'Rogers',
    living: false,
    bountyAmount: 154,
    type: 'Sith',
    _id: uuid()
}
    ];
   
    personRouter.route('/')
    .get((req,res) => {
        console.log(req.body);
        res.send(person)
    })

   .post((req, res) => {
       const newPerson = req.body;
       newPerson._id = uuid();
        person.push(newPerson);
       res.send('Adding new ${newPerson} to bounty')
     })

personRouter.route('/:personId')
.get((req,res) =>{
    const personId = req.params.personId;
    const personName = person.find(person =>person._id  === personId);
    res.send(personName)
}) 
     .put((req,res) =>{
        const personId = req.params.personId;
         const personIndex = person.findIndex(p =>p._id  === personId);
         const updatedPersonResource = Object.assign(person[personIndex], req.body);

        res.send(updatedPersonResource)
       
 })



 .delete((req,res) => {
     const personId = req.params.personId;
     const personIndex = person.findIndex(p =>p._id  === personId);
     person.splice(personIndex, 1);

     res.send('delete completed!')
 })



   module.exports = personRouter;
