import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import db from './config/Database.js';
// import { Users } from './models/UserModel.js';

dotenv.config();
const app = express();
const PORT = 5000;

try {
    await db.authenticate();
    console.log("Database connected");
    // await Users.sync();
} catch(err) {
    console.log(err);
}

app.use(router);
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log("Server running at http://localhost:5000"));