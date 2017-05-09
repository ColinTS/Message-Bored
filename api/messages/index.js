 /*jshint esversion: 6*/
const express = require('express');
const messages = express.Router();
const { Message, User, Topic } = require('../../models');


messages.post('/', (req, res) =>
  Message.create( req.body )
    .then( res.json.bind(res) )
    .catch( res.json.bind(res) )
);

messages.get('/latest', (req, res) => {
  Message.findAll({
    include: [
      {
        model: User,
        as: 'Author'
      },
      {
        model: Topic,
        as: 'Topic'
      }
    ],
    limit: 10, order: '"updatedAt" DESC'})
    .then(( messages )=> {
      res.json( messages );
    });
});

messages.get('/:topic_id', ( req, res ) => {
  Message.all({
    include: [
      {
        model: User,
        as: 'Author'
      },
      {
        model: Topic,
        as: 'Topic'
      }
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    where : { topic_id : req.params.topic_id }
  })
  .then( res.json.bind(res) );
});




module.exports = messages;