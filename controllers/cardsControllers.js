const path = require('path');

//const pathCardData = path.join(__dirname, '..', 'data', 'cards.json');
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
  .then(cards => res.status(200).send(cards))
  .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

module.exports = { getCards };
