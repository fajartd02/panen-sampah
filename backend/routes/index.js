import express from 'express';
import { Auth } from '../controllers/Auth.js';
import { User } from '../controllers/User.js';
const router = express.Router();

// Declare Class
const auth = new Auth()
const user = new User();

// Auth
router.post("/auth/login", auth.login);
router.post("/auth/register", auth.register);
router.delete("/auth/logout", auth.logout);

// Users
router.get("/users", user.getUsers);

// Map




export default router;