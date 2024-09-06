import express from 'express';
import { addSession, getSessions } from '../controllers/userSessionController.js';

const router = express.Router();

router.post("/", addSession);
router.get("/:userId/", getSessions);

export default router;