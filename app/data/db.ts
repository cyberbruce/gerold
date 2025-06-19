import { CosmosClient } from "@azure/cosmos";


 
const endpoint = process.env.COSMOSDB_URL;
const key = process.env.COSMOSDB_KEY;
const client = new CosmosClient({ endpoint, key });

export const db = client.databases.createIfNotExists({ id: "Inventory" });

export type CreateItem = Omit<Item, '_ts'>;

export type Item = {
    id: string;
    type: string;
    message: string;
    _ts: number;
};