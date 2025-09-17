// nurse.controller.js
import {
    addNurseToDB,
    editNurseInDB,
    deleteNurseFromDB,
    checkNurse,
    getAllNursesPaginated
} from "../../model/nurse.model.js";
import {validationResult} from "express-validator";

// Get all nurses
export const getAllData = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const { data, total } = await getAllNursesPaginated(page, limit);

        res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            data,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Add a nurse
export const addNurse = async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body.licenseNumber);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const nurseExists = await checkNurse(req.body.licenseNumber);
        if (nurseExists) {
            return res.status(409).json({ message: "Nurse with this license number already exists." });
        }
        const nurseData = req.body;
        await addNurseToDB(nurseData);
        res.status(201).json({ message: "Nurse added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Edit a nurse
export const editNurse = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const nurseData = req.body;

        // const exists = await checkNurse(nurseData.licenseNumber);
        // if (exists) {
        //     return res.status(409).json({ message: "Another nurse with this license number already exists" });
        // }

        await editNurseInDB(id, nurseData);
        res.json({ message: "Nurse updated successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// Delete a nurse
export const deleteNurse = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteNurseFromDB(id);
        res.json({ message: "Nurse deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getAllForExport = async (req, res) => {
    try {
        const { data, total } = await getAllNursesPaginated(1, Number.MAX_SAFE_INTEGER);

        res.json({
            total,
            data,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
