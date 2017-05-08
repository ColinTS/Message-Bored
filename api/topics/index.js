 /*jshint esversion: 6*/
const express = require('express');
const topics = express.Router();
const { Topic, User } = require('../../models');

topics.post('/', (req, res) => {
  Topic.create( req.body )
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

topics.get('/', (req, res) => {
  Topic.all({
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
    .then(( topics )=> {
      res.json( topics );
    });
});

topics.get('/:id', (req, res) => {
  Topic.findById(req.params.id)
    .then(( topic )=> {
      res.json( topic );
    });
});

topics.put('/:name', (req, res) => {
  Topic.update({
    name: req.body.name
  } , {
    where: { name: req.params.name }
  })
    .then(( result )=> {
      return Topic.findById(req.params.id)
    .then( topic => {
      res.json(topic);
    });
  });
});

module.exports = topics;