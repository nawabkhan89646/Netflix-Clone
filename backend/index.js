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
    origin: ['https://netflix-clone-indol-chi-65.vercel.app/'],
    credentials: true, // Allow cookies to be sent
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],
};


// Use CORS middleware
app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://netflix-clone-indol-chi-65.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    return res.status(200).json({});
});

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
