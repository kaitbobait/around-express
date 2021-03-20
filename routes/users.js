const express = require('express');

const fs = require('fs').promises;

const path = require('path');

const router = express.Router();

const { getUsers, getOneUser } = require('../controllers/userControllers');

router.get('/users', getUsers);

router.get('/users/:id', getOneUser);

module.exports = router;
