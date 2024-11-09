const express = require('express')
// const db = require('../firebaseConfig.js');
const {Form} = require('../models/form.js');
const {validateFormData} = require('../validation/validateForm.js');

const app = express();
const port = 3000;

const cardRoutes = require('../routes/card.js');

app.use('/cards', cardRoutes);

app.listen(port, () => console.log(`Serving on port ${port}!`));