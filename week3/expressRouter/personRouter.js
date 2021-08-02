const express = require("express");
const { v4: uuid } = require('uuid');
 const personRouter = express.Router()
//  import { Router } from 'express';

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
        person.push(newPerson);
       res.send('Adding new ${newPerson} to bounty')
     })


    .put((req,res) =>{
        const personId = req.params.personId;
        const personIndex = person.findIndex(person =>person._Id  === personId);
        const updatedPersonResource = Object.assign(person[personIndex], req.body);

        res.send('updated bounty data')
       
})



.delete((req,res) => {
    const personId = req.params.personId;
    const personIndex = person.findIndex(person =>person._Id  === personId);
    person.splice(personIndex);

    res.send('delete completed!')
})



  module.exports = personRouter;