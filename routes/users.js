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

router.get('/users', (req, res) => {
  const pathUserData = path.join(__dirname, '..', 'data', 'users.json');
  getFileContent(pathUserData)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get('/users/:id', (req, res) => {
  const pathUserData = path.join(__dirname, '..', 'data', 'users.json');
  getFileContent(pathUserData)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id);
      if (!user) {
        res.send(res.status(404), { message: 'User ID not found, k byebye!' });
      }
      res.status(200).send(user);
    });
});

module.exports = router;
