// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import express from 'express';

const app = express();
const port = 3000;

import cardRoutes from '../routes/card.js';

app.use('/cards', cardRoutes);

app.listen(port, () => console.log(`Serving on port ${port}!`));