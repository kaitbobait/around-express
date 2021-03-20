const path = require('path');

const pathUserData = path.join(__dirname, '..', 'data', 'users.json');

const fs = require('fs').promises;

const getFileContent = require('../helpers/getFileContent');

function getUsers(req, res) {
  return getFileContent(pathUserData)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    })
}

function getOneUser(req, res) {
  return getFileContent(pathUserData)
      .then((users) => {
        const user = users.find((user) => user._id === req.params.id);
        if (!user) {
          res.send(res.status(404), { message: 'User ID not found, k byebye!' });
        }
        res.status(200).send(user);
      });
}

module.exports = {
  getUsers,
  getOneUser
};
