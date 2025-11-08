import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
let cachedDb: any = null;

export async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri!, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    const db = client.db(process.env.MONGODB_DB);
    cachedDb = db;
    return db;
}

export async function closeConnection() {
    if (cachedDb) {
        const client = cachedDb.client;
        await client.close();
        cachedDb = null;
    }
}