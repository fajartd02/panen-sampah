import express from 'express';
import { Auth } from '../controllers/Auth.js';
const router = express.Router();
const auth = new Auth()

// Auth
router.get("/auth/login", auth.login);


// Map

// Index


export default router;