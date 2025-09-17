import { body } from "express-validator";

export const validateNurseData = [
    body("nurseName")
        .notEmpty().withMessage("Nurse name is required.")
        .isLength({ min: 3 }).withMessage("Nurse name must be at least 3 characters."),

    body("licenseNumber")
        .notEmpty().withMessage("License number is required.")
        .isLength({ min: 10, max: 10 }).withMessage("License number must be exactly 10 characters."),

    body("dob")
        .notEmpty().withMessage("Date of birth is required.")
        .isDate().withMessage("Date of birth must be a valid date."),

    body("age")
        .notEmpty().withMessage("Age is required.")
        .isInt({ min: 18 }).withMessage("Age must be a number and at least 18."),
];
