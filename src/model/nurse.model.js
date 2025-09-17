// nurse.model.js
import {nurses} from "../db/schema.js";
import {db} from "../db/db.js";
import {eq} from "drizzle-orm/sql/expressions/conditions";

export const getAllNursesPaginated = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;

    // Get total number of nurses
    const total = await db.select().from(nurses).execute();

    // Get paginated data
    const data = await db
        .select()
        .from(nurses)
        .limit(limit)
        .offset(offset)
        .execute();

    return { data, total: total.length };
};


export const addNurseToDB = async (nurseData) => {
    return db.insert(nurses).values(nurseData);
};

export const editNurseInDB = async (id, nurseData) => {
    return db
        .update(nurses)
        .set(nurseData)
        .where(eq(nurses.id, Number(id)));
};

export const deleteNurseFromDB = async (id) => {
    return db.delete(nurses).where(eq(nurses.id, Number(id)));
};

export const checkNurse = async (licenseNumber) => {
    const result =  await db.select().from(nurses).where(eq(nurses.licenseNumber, licenseNumber)).execute();
    console.log(result);
    return result.length > 0; // true if nurse exists
};