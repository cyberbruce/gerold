import { database } from "./db";


export async function getPigStats() {
  const container = database.container("pigstats");
  const querySpec = {
    query: "SELECT * FROM c",
  };

  try {
    const { resources: items } = await container.items.query(querySpec).fetchAll();
    return items;
  } catch (error) {
    console.error("Error fetching pig stats:", error);
    throw error;
  }
}