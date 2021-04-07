const path = require('path');

//const pathUserData = path.join(__dirname, '..', 'data', 'users.json');
const User = require('../models/user');

const getFileContent = require('../helpers/getFileContent');

function getUsers(req, res) {
  // return getFileContent(pathUserData)
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch(() => res.status(500).json({ message: 'Internal Server Error' }));

  return User.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).send({ message: 'Error with database - k' }))
}

function getOneUser(req, res) {
  // return getFileContent(pathUserData)
  //   .then((users) => {
  //     const currentUser = users.find((user) => user._id === req.params.id);
  //     if (!currentUser) {
  //       res.status(404).send({ message: 'User ID not found, k byebye!' });
  //     }
  //     res.status(200).send(currentUser);
  //   });

  //not finding the user id
  return User.findOne({ id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User ID not found, k byebye!' });
      } 
      return res.status(200).send(user);
      //res.status(200).send({user}) // returns "null"
      
    })
    .catch (err => res.status(400).send(err))
}

module.exports = {
  getUsers,
  getOneUser,
};
