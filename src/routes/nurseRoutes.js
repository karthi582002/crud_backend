import express from "express";
import {
    getAllData,
    addNurse,
    editNurse,
    deleteNurse,
    getAllForExport
} from "../controller/nurse.controller/nurse.controller.js";
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

// All data for excel file
router.get("/export", getAllForExport);


export default router;
