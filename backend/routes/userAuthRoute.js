import express from 'express';
import { emailLogin, getAllUsers } from '../controllers/userAuthController.js';

const router = express.Router();

router.get("/", getAllUsers);
router.post("/login", emailLogin);


export default router;