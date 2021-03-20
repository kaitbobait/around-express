const express = require('express');

const fs = require('fs').promises;

const path = require('path');

const router = express.Router();

function getFileContent(path) {
  return fs.readFile(path, { enconding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => {
      console.log(err);
    });
};

router.get('/cards', (req, res) => {
  const pathCardData = path.join(__dirname, '..', 'data', 'cards.json');
  getFileContent(pathCardData)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    })

});

module.exports = router;