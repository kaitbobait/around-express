const express = require('express');

const router = express.Router();

const { getUsers, getOneUser, createUser } = require('../controllers/userControllers');

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/users/:id', getOneUser);


module.exports = router;
