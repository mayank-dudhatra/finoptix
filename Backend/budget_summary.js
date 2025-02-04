const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

// MongoDB connection details
const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// Middleware
app.use(express.json());

let db, budget_summary;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        budget_summary = db.collection("budget_summary"); // Initialize budget_summary collection

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

// GET: List all budget_summary
app.get('/budget_summary', async (req, res) => {
    try {
        const allBudget_summary = await budget_summary.find({}).toArray();
        res.status(200).json(allBudget_summary);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error fetching budget summary: " + err.message });
    }
});

// GET: Get user details by budget_summary
app.get('/budget_summary/:user', async (req, res) => {
    try {
        const user = req.params.user;
        const userBudget_summary = await budget_summary.findOne({ user });

        if (!userBudget_summary) {
            return res.status(404).json({ error: "Budget Summary not found for this user" });
        }

        res.status(200).json(userBudget_summary);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error fetching budget summary details: " + err.message });
    }
});

// POST: Add a new budget_summary
app.post('/budget_summary', async (req, res) => {
    try {
        const newBudget_summary = req.body;
        const result = await budget_summary.insertOne(newBudget_summary);
        res.status(201).json({ message: `Budget Summary added with ID: ${result.insertedId}` });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error adding budget summary: " + err.message });
    }
});

// PUT: Update a budget_summary completely
app.put('/budget_summary/:user', async (req, res) => {
    try {
        const user = req.params.user; // Get user from URL parameter
        const updates = req.body; // Get update fields from request body

        const result = await budget_summary.updateOne(
            { user }, // Find record by user
            { $set: updates } // Apply updates
        );

        res.status(result.modifiedCount ? 200 : 404).json({
            message: result.modifiedCount ? "User budget summary updated" : "No changes made"
        });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error updating budget summary: " + err.message });
    }
});




// DELETE: Remove a budget_summary
app.delete('/budget_summary/:user', async (req, res) => {
    try {
        const user = req.params.user;
        const result = await budget_summary.deleteOne({ user });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No budget summary found for this user" });
        }
        
        res.status(200).json({ message: `Budget Summary deleted for user` });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error deleting budget summary: " + err.message });
    }
});
