const path = require('path');

const Cards = require('../models/cards');

const getFileContent = require('../helpers/getFileContent');
const { findByIdAndUpdate } = require('../models/cards');

function getCards(req, res) {
  return Cards.find({})
    .then(cards => {
      
      res.status(200).send(cards)
    })
    .catch(() => res.status(500).send({ message: 'Internal Server Error' }));
}

//returns error 400, ownerId is undefined
function createCard(req, res) {
  const { name, link} = req.body;

  return Cards.create({ name, link, owner: req.user._id })
    .then(card => {
      res.status(200).send(card)
    })
    .catch(err => {
      res.status(400).send({message: "Invalid data"})
    })
}

function deleteCard(req, res) {
  return Cards.findByIdAndRemove(req.params.id)
    .then(user => {
      console.log(req.user._id);
      if (user) {
        res.send({ data: user })
      } else {
        res.status(404).send({ message: 'Card not found' });
      }

    })
    .catch(err => res.status(500).send({ message: 'Error' }));
}

function addLike(req, res) {
  return findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // add _id to the array if it's not there yet
    { new: true })
    .then(likes => res.send({ data: likes }))
    .catch(err => res.status(500).send({ message: 'Error' }));
}

function deleteLike(req, res) {
  return findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id from the array
    { new: true },
  )
  .then(likes => res.send({ data: likes }))
  .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addLike,
  deleteLike
};
