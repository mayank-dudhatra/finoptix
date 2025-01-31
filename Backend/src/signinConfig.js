// const { log } = require("console");
// const { request } = require("http");
// const connect = mongoose.connect("mongodb://127.0.0.1:27017/Finoptix");


// connect.then(() => {
//     console.log("Database Connected");
// })
// .catch(() => {
//    console.log("Database cannot be connected");
   
// });


// const LoginSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });


// const collection = new mongoose.model("user", LoginSchema);

// module.exports = collection;






// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'Finoptix';

// async function connect() {
//     try {
//         // Connect the client to the server
//         await client.connect();
//         console.log("Database Connected");
//         return client.db(dbName);
//     } catch (err) {
//         console.error("Database cannot be connected", err);
//         throw err;
//     }
// }

// // Define the schema and collection
// const collectionName = 'signins';

// async function getCollection() {
//     const db = await connect();
//     return db.collection(collectionName);
// }

// // Example usage
// async function main() {
//     const collection = await getCollection();

//     // Insert a document
//     const insertResult = await collection.insertOne({
//         username: 'exampleUser',
//         password: 'examplePassword'
//     });
//     console.log('Inserted document:', insertResult.insertedId);

//     // Find a document
//     const findResult = await collection.findOne({ username: 'exampleUser' });
//     console.log('Found document:', findResult);
// }

// main().catch(console.error);





const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'Finoptix';
const collectionName = 'signins';

async function connect() {
    try {
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect();
            console.log("Database Connected");
        }
        return client.db(dbName);
    } catch (err) {
        console.error("Database cannot be connected", err);
        throw err;
    }
}

async function getCollection() {
    const db = await connect();
    return db.collection(collectionName);
}

async function main() {
    try {
        const collection = await getCollection();

        // Hash password before inserting
        const hashedPassword = await bcrypt.hash('examplePassword', 10);

        // Insert a document
        const insertResult = await collection.insertOne({
            username: 'exampleUser',
            password: hashedPassword
        });
        console.log('Inserted document ID:', insertResult.insertedId);

        // Find a document
        const findResult = await collection.findOne({ username: 'exampleUser' });

        if (findResult) {
            console.log('Found document:', findResult);
        } else {
            console.log('No document found');
        }
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        await client.close();
        console.log("Database connection closed");
    }
}

main();
