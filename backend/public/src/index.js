const express = require('express')
import { db } from './firebaseConfig.js';
const {Form} = require('./models/form.js');
const {validateFormData} = require('./validation/validateForm.js');

const app = express.Router();
const port = 3000;



app.listen(port, () => console.log(`Serving on port ${port}!`));