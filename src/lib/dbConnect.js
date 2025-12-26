const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;
const collections = {
    PRODUCTS: 'products'
}

// Create a MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const dbConnect = (collection_name) => {
    return client.db(db_name).collection(collection_name);
}