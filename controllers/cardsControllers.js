const path = require('path');

const Cards = require('../models/cards');

const getFileContent = require('../helpers/getFileContent');

function getCards(req, res) {
  // return getFileContent(pathCardData)
  //   .then((cards) => {
  //     res.send(cards);
  //   })
  //   .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  return Cards.find({})
    .populate(['owner', 'likes'])
    .then(cards => {
      res.status(200).send(cards)
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

function createCard(req, res) {
  const { name, link } = req.body;

  return Cards.create({ name, link })
    .then(card => {
      res.status(200).send(card)
    })
    .catch(err => res.status(400).send(err))
}

function deleteCard(req, res) {
  return Cards.findByIdAndRemove({ id: req.params.id })
    .then(user => {
      console.log(req.user._id);
      if(user){
        res.send({ data: user })
      } else {
        res.status(404).send({message: 'Card not found'});
      }

    })
    .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports = {
  getCards,
  createCard,
  deleteCard
};
