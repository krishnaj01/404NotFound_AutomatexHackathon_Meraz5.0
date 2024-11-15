// cardRoutes.js

import express from 'express';
import { validateCardData } from './middleware.js'; // Import validation middleware
import { createCard, getAllCards, getCardById, updateCard, deleteCard } from './card.js'; // Import CRUD functions

const router = express.Router();

// CREATE - POST /cards
router.post('/cards', async (req, res) => {
  try {
    const cardData = req.body;
    validateCardData(cardData); // Validate the input data

    const cardId = await createCard(cardData); // Create card in Firestore
    res.status(201).json({ id: cardId, message: 'Card created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET ALL - GET /cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await getAllCards(); // Fetch all cards
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET BY ID - GET /cards/:id
router.get('/cards/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    const card = await getCardById(cardId); // Fetch card by ID

    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - PUT /cards/:id
router.put('/cards/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    const updatedData = req.body;
    validateCardData(updatedData); // Validate the input data

    const updatedCardId = await updateCard(cardId, updatedData); // Update card in Firestore
    res.status(200).json({ id: updatedCardId, message: 'Card updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - DELETE /cards/:id
router.delete('/cards/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    await deleteCard(cardId); // Delete card from Firestore

    res.status(200).json({ id: cardId, message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
