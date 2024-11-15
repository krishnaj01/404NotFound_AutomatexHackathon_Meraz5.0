import firebase from 'firebase/app';
import 'firebase/firestore';
import { validateCardData } from './middleware'; // Import the middleware to validate card data

const db = firebase.firestore();

// CRUD operations for cards

// CREATE a card
export const createCard = async (cardData) => {
  try {
    // Validate the card data using middleware
    validateCardData(cardData);

    // Add the data to Firestore
    const cardRef = db.collection('cards');
    const docRef = await cardRef.add({
      ...cardData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Automatically adds server timestamp
    });

    return docRef.id; // Return the document ID after creation
  } catch (error) {
    console.error('Error adding card:', error);
    throw new Error('Error adding card to Firestore');
  }
};

// GET all cards
export const getAllCards = async () => {
  try {
    const cardRef = db.collection('cards');
    const snapshot = await cardRef.get();

    const cards = [];
    snapshot.forEach(doc => {
      cards.push({ id: doc.id, ...doc.data() }); // Add document data along with its ID
    });

    return cards; // Return all cards from Firestore
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw new Error('Error fetching cards from Firestore');
  }
};

// GET card by ID
export const getCardById = async (id) => {
  try {
    const docRef = db.collection('cards').doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      return { id: doc.id, ...doc.data() }; // Return the card data if found
    } else {
      throw new Error('Card not found');
    }
  } catch (error) {
    console.error('Error fetching card by ID:', error);
    throw new Error('Error fetching card from Firestore');
  }
};

// UPDATE a card
export const updateCard = async (id, updatedData) => {
  try {
    // Validate the updated data using middleware
    validateCardData(updatedData);

    const docRef = db.collection('cards').doc(id);
    await docRef.update(updatedData); // Update the card document in Firestore

    return id; // Return the card ID after update
  } catch (error) {
    console.error('Error updating card:', error);
    throw new Error('Error updating card in Firestore');
  }
};

// DELETE a card
export const deleteCard = async (id) => {
  try {
    const docRef = db.collection('cards').doc(id);
    await docRef.delete(); // Delete the card document from Firestore

    return id; // Return the deleted card's ID
  } catch (error) {
    console.error('Error deleting card:', error);
    throw new Error('Error deleting card from Firestore');
  }
};
