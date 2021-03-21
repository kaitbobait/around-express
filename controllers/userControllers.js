const path = require('path');

const pathUserData = path.join(__dirname, '..', 'data', 'users.json');

const getFileContent = require('../helpers/getFileContent');

function getUsers(req, res) {
  return getFileContent(pathUserData)
    .then((users) => {
      res.send(users);
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
}

function getOneUser(req, res) {
  return getFileContent(pathUserData)
    .then((users) => {
      const currentUser = users.find((user) => user._id === req.params.id);
      if (!currentUser) {
        res.status(404).send({ message: 'User ID not found, k byebye!' });
      }
      res.status(200).send(currentUser);
    });
}

module.exports = {
  getUsers,
  getOneUser,
};
