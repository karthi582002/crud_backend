import express from "express";
import { getAllData, addNurse, editNurse, deleteNurse } from "../controller/nurse.controller/nurse.controller.js";
import {validateNurseData} from "../utils/BodyValidator.js";

const router = express.Router();

// Get all nurse data
router.get("/getData", getAllData);

// Add new nurse
router.post("/add",validateNurseData, addNurse);

// Edit nurse by ID
router.put("/edit/:id",validateNurseData, editNurse);

// Delete nurse by ID
router.delete("/delete/:id", deleteNurse);

export default router;
