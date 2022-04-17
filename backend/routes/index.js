import express from 'express';
import { Auth } from '../controllers/Auth.js';
const router = express.Router();

// Declare Class
const auth = new Auth()

// Auth
router.get("/auth/login", auth.login);
router.get("/auth/register", auth.register);
router.get("/auth/logout", auth.logout);


// Map

// Index


export default router;