'use server';

import { database } from "./db";

export async function StoreSupportEmail(email: string, full_name: string) {
  const container = database.container("support");
  const now = new Date().toISOString();
  const item = {
    id: email,
    full_name: full_name,
    email: email,
    type: "email",
    created_at: now,
  };

  try {
    // Upsert the item to ensure it is created or updated
    await container.items.upsert(item);
    return { success: true, message: "Email stored successfully." };
  } catch (error) {
    console.error("Error storing support email:", error);
    return { success: false, message: "Failed to store email." };
  }
}
