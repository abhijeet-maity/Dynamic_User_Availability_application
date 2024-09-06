import express from 'express';
import { addingUserAvailability, getUserAvailability, deleteUserAvailability } from '../controllers/userAvailabilityController.js';

const router = express.Router();

router.post("/", addingUserAvailability );
router.get("/:userId", getUserAvailability);
router.delete("/:id", deleteUserAvailability);

export default router;

