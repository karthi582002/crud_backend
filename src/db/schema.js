import { mysqlTable, int, varchar, date } from "drizzle-orm/mysql-core";

export const nurses = mysqlTable("nurses", {
    id: int("id").autoincrement().primaryKey(),
    nurseName: varchar("nurseName", { length: 100 }).notNull(),
    licenseNumber: varchar("licenseNumber", { length: 10 }).unique().notNull(),
    dob: date("dob").notNull(),
    age: int("age").notNull(),
});
