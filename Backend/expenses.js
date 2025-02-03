const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

// MongoDB connection details
const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// Middleware
app.use(express.json());

let db, expenses;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        expenses = db.collection("expenses"); // Initialize expenses collection

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all Expenses
app.get('/expenses', async (req, res) => {
    try {
        const allExpenses = await expenses.find().toArray();
        res.status(200).json(allExpenses);
    } catch (err) {
        res.status(500).send("Error fetching expenses: " + err.message);
    }
});

// GET: Get user details by expenseId
app.get('/expenses/:expenseId', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const user = await expenses.findOne({ expenseId });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send("Error fetching user details: " + err.message);
    }
});


// app.get('/expenses/:expenseId', async (req, res) => {
//     try {
//         const expenseId = req.params.expenseId;

//         // Query the database for the user with only 'profileViews' field
//         const user = await expenses.findOne(
//             { expenseId }, // Match expenseId
//             { projection: { profileViews: 1, _id: 0 } } // Include profileViews, exclude _id
//         );

//         if (!user) {
//             return res.status(404).send("User not found");
//         }

//         // Send the 'profileViews' as the response
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).send("Error fetching user details: " + err.message);
//     }
// });

// POST: Add a new user
app.post('/expenses', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await expenses.insertOne(newUser);
        res.status(201).send(`User added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
    }
});

// PUT: Update a user completely
app.put('/expenses/:username', async (req, res) => {
    try {
        const username = req.params.username; // Get username from URL
        const updates = req.body; // Get update fields from request body

        const result = await expenses.updateOne(
            { user: username }, // Find expense by username
            { $set: updates } // Apply full updates
        );

        res.status(result.modifiedCount ? 200 : 404).send(
            result.modifiedCount ? "User expenses updated" : "No changes made"
        );
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});



app.put('/expenses/:expenseId/skills', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const { skills } = req.body;

        // Ensure skills array is provided in the request body
        if (!skills || !Array.isArray(skills)) {
            return res.status(400).send("Invalid input: 'skills' must be an array.");
        }

        // Update the 'skills' field for the specified user
        const result = await expenses.updateOne(
            { expenseId }, // Match user by expenseId
            { $set: { skills } } // Update the 'skills' field
        );

        if (result.matchedCount === 0) {
            return res.status(404).send("User not found");
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error updating user skills: " + err.message);
    }
});


// PATCH: Partially update a user
app.patch('/expenses/:expenseId', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const updates = req.body;
        const result = await expenses.updateOne(
            { expenseId: expenseId },
            { $set: { headline: "Team Lead at CodingGita" } }
        );
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating user: " + err.message);
    }
});

app.patch('/expenses/:expenseId/premium', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        console.log("Received expenseId:", expenseId); // Debug log
        
        const result = await expenses.updateOne(
            { expenseId: expenseId },
            { $set: { isPremium: true } }
        );

        if (result.matchedCount === 0) {
            console.log("No matching user found for expenseId:", expenseId); // Debug log
            return res.status(404).send("User not found");
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error upgrading user to premium: " + err.message);
    }
});



// DELETE: Remove a user
app.delete('/expenses/:expenseId', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const result = await expenses.deleteOne({ expenseId: expenseId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});
