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


  module.exports = personRouter;