import express from 'express';
import { Auth } from '../controllers/Auth.js';
const router = express.Router();

// Declare Class
const auth = new Auth()

// Auth
router.get("/auth/login", auth.login);
router.get("/auth/register", auth.register);


// Map

// Index


export default router;