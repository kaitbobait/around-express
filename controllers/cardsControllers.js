const path = require('path');

const pathCardData = path.join(__dirname, '..', 'data', 'cards.json');

const getFileContent = require('../helpers/getFileContent');

function getCards(req, res) {
  return getFileContent(pathCardData)
    .then((cards) => {
      res.send(cards);
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

module.exports = { getCards };
