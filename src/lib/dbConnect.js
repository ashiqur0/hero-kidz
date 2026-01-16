const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

// to use collection name without mistake
export const collections = {
    PRODUCTS: 'products',
    USERS: 'users',
}

// Create a MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// if no collection: create and connect || only connect collection
export const dbConnect = (collection_name) => {
    // if no database then create + connect otherwise connect database
    return client.db(db_name).collection(collection_name);
}