import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');

const app = express();
const port = 3000;

const cardRoutes = require('../routes/card.js');

app.use('/cards', cardRoutes);

app.listen(port, () => console.log(`Serving on port ${port}!`));