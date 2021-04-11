const path = require('path');
const User = require('../models/user');

const getFileContent = require('../helpers/getFileContent');
const { findByIdAndUpdate } = require('../models/user');

function getUsers(req, res) {
  // return getFileContent(pathUserData)
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch(() => res.status(500).json({ message: 'Internal Server Error' }));

  return User.find({})
    .then(users => {
      if(users){
        return res.status(200).send(users)
      } 
      return res.status(404).json({message: 'Users not found'});
      
    })
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
  return User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        console.log(user);
        return res.status(404).send({ message: 'User ID not found' });
      }  
      return res.status(200).send(user);
      
    })
    .catch (err => {
      console.log(err);
      if (err.name === 'CastError') return res.status(400).send({ error: 'invalid id number' });
      return res.status(500).send({ error: 'system error' });
    })
}

function createUser(req, res) {
  console.log(req.body);
  return User.create(req.body)
  .then(user => res.status(200).send(user))
  .catch (err => res.status(400).send(err))
}

// get 200 response in Postman but doesn't update
function updateUser(req, res) {
  
    return User.findByIdAndUpdate(req.user._id,{name: 'Test User', about: 'about the test user'},{
      new: true, // the then handler receives the updated entry as input
      runValidators: true, // the data will be validated before the update 
      upsert: true // if the user entry wasn't found, it will be created
  })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Error' }));
}

// returns 404 not found
function updateUserAvatar(req, res) {
  return User.findByIdAndUpdate(req.user._id, {avatar: ""},{
    new: true, // the then handler receives the updated entry as input
    runValidators: true, // the data will be validated before the update 
    upsert: true // if the user entry wasn't found, it will be created
})
  .then(link => res.send({data: link}))
  .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports = { 
  getUsers,
  getOneUser,
  createUser, 
  updateUser, 
  updateUserAvatar
};
