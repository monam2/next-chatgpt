import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { user } from "./schema";

const sql = neon(
  process.env.DATABASE_URL!,
) as unknown as string;
const db = drizzle(sql, { schema: { user } });

export default db;
