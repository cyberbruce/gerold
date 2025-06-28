import { CosmosClient } from "@azure/cosmos";

const endpoint = process.env.AZURE_COSMOS_ENDPOINT;
const key = process.env.AZURE_COSMOS_KEY;
const databaseId = process.env.AZURE_COSMOS_DATABASE;

// It's a good practice to validate environment variables at startup.
if (!endpoint || !key || !databaseId) {
  throw new Error(
    "Azure Cosmos DB environment variables are not set. Please check your environment configuration."
  );
}

// By creating the client at the module level, you ensure that a single instance
// is created and shared across your application. This is the recommended pattern
// for managing connections efficiently and leveraging connection pooling.
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);

// Export the client and database objects for use in other parts of your application.
export { client, database };
