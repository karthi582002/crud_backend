import express from 'express';
import nurseRoutes from "./routes/nurseRoutes.js";
import cors from "cors";
const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "https://crud-frontend-black-delta.vercel.app"
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

// Test route
app.get("/", (req, res) => {
    res.send("Testing");
});

// Common Routes For Nurse Role
app.use("/nurses", nurseRoutes);

export default app;
