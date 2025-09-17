import express from 'express';
import nurseRoutes from "./routes/nurseRoutes.js";
import cors from "cors";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true,
}));

// Test route
app.get("/", (req, res) => {
    res.send("Testing");
});

// Common Routes For Nurse Role
app.use("/nurses", nurseRoutes);

export default app;
