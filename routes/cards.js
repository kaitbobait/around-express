const express = require('express');

const router = express.Router();

const { getCards, createCard, deleteCard } = require('../controllers/cardsControllers');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards/:id', deleteCard);

module.exports = router;
