const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

// MongoDB connection details
const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// Middleware
app.use(express.json());

let db, monthly_trend;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        monthly_trend = db.collection("monthly_trend"); // Initialize monthly_trend collection

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

// GET: List all monthly_trends
app.get('/monthly_trend', async (req, res) => {
    try {
        const allMonthly_trend = await monthly_trend.find({}).toArray();
        res.status(200).json(allMonthly_trend);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error fetching monthly trends: " + err.message });
    }
});

// GET: Get user details by monthly_trendId
// app.get('/monthly_trend/:user', async (req, res) => {
//     try {
//         const emonthly_trendId = req.params.monthly_trendId;
//         const monthly_trend = await monthly_trend.findOne({ monthly_trendId });

//         if (!monthly_trend) {
//             return res.status(404).send("Monthly trend not found");
//         }

//         res.status(200).json(monthly_trend);
//     } catch (err) {
//         res.status(500).send("Error fetching monthly trend details: " + err.message);
//     }
// });


app.get('/monthly_trend/:user', async (req, res) => {
    try {
        const user = req.params.user;
        const userMonthlyTrend = await monthly_trend.findOne({ user });

        if (!userMonthlyTrend) {
            return res.status(404).json({ error: "Monthly trend not found for this user" });
        }

        res.status(200).json(userMonthlyTrend);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error fetching monthly trend details: " + err.message });
    }
});

// POST: Add a new monthly_trend
app.post('/monthly_trend', async (req, res) => {
    try {
        const newMonthly_trend = req.body;
        const result = await monthly_trend.insertOne(newMonthly_trend);
        res.status(201).json({ message: `Monthly trend added with ID: ${result.insertedId}` });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error adding monthly trend: " + err.message });
    }
});

// PUT: Update a monthly_trend completely
app.put('/monthly_trend/:user', async (req, res) => {
    try {
        const user = req.params.user; // Get user from URL parameter
        const updates = req.body; // Get update fields from request body

        const result = await monthly_trend.updateOne(
            { user }, // Find record by user
            { $set: updates } // Apply updates
        );

        res.status(result.modifiedCount ? 200 : 404).json({
            message: result.modifiedCount ? "User monthly trend updated" : "No changes made"
        });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error updating monthly trend: " + err.message });
    }
});




// DELETE: Remove a monthly_trend
app.delete('/monthly_trend/:user', async (req, res) => {
    try {
        const user = req.params.user;
        const result = await monthly_trend.deleteOne({ user });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No monthly trend found for this user" });
        }
        
        res.status(200).json({ message: `Monthly trend deleted for user` });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Error deleting monthly trend: " + err.message });
    }
});
