import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import db from './config/Database.js';
import cors from "cors";
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

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(PORT, () => console.log("Server running at http://localhost:5000"));