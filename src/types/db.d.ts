import { user } from "@/db/schema";

type User = typeof user.$inferSelect;
