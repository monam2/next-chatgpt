import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export default db;
