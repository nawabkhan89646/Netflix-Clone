import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';

dotenv.config();

databaseConnection();
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: ['https://netflix-clone-eight-eta-47.vercel.app/', 'https://netflix-clone-tdxz.onrender.com'],
    credentials: true, // Allow cookies to be sent
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],
};


// Use CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions)); // This is crucial for preflight requests

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "hello world" });
});

app.use('/api/v1/user', userRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
