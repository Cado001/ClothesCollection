import { MongoClient } from "mongodb";
import { connectionString } from "../secret.js";

const client = new MongoClient(connectionString);

await client.connect();

export const db = client.db('MyFirstCluster')

export function closeClient() {
    client.close();
}