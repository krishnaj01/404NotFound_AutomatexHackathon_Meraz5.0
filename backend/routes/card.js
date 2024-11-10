import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const db = require('../firebaseConfig.js');
const {Form} = require('../models/form.js');
const checkUser = require('../middleware/checkUser');
const {validateFormData} = require('../validation/validateForm.js');

import { collection, getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const router = express.Router();

//show all cards
router.get('/show', async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "forms"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//add a card

router.post('/new', async (req, res) => {
    try {
        const {email, name, type, contact, title, description, location} = req.body;
        const formData = {email, name, type, contact, title, description, location};
        if(!validateFormData(formData)){
            return res.status(500).send('validateFormData is FALSE!');
        } else {
            const docRef = await addDoc(collection(db, "forms"), formData);
            console.log("Document written with ID: ", docRef.id);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;