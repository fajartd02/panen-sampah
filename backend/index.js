import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 5000;

app.use(router);
app.use(express.json());


app.listen(PORT, () => console.log("Server running at http://localhost:5000"));