import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userAuthRoute from "./routes/userAuthRoute.js";
import userAvailabilityRoute from "./routes/userAvailabilityRoute.js";
import userSessionRoute from "./routes/userSessionRoute.js";
import { connectDb } from './db/db.js';


dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // If you're dealing with cookies or other credentials
}));

//To parse the request body.
app.use(express.json());

app.use("/api/userAuth", userAuthRoute);
app.use("/api/userAvailability", userAvailabilityRoute);
app.use("/api/userSession", userSessionRoute);

app.listen(PORT, () => {
    console.log(`Server started listening on http://localhost:${PORT}`);
    connectDb();
});

