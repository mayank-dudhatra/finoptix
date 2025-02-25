const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

// MongoDB connection details
// const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// Middleware
app.use(express.json());

let db, profile;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        profile = db.collection("profile"); // Initialize profile collection

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
app.get('/profile', async (req, res) => {
    try {
        console.log("Fetching profiles...");
        const allProfile = await profile.find().toArray();
        console.log("Profiles found:", allProfile);
        res.status(200).json(allProfile);
    } catch (err) {
        console.error("Error fetching profiles:", err);
        res.status(500).send("Error fetching users: " + err.message);
    }
});



// GET: Get profile details by username
app.get('/profile/:username', async (req, res) => {
    try {
        const { username } = req.params;
        console.log("Fetching profile for username:", username);

        if (!profile) {
            console.error("Database collection 'profile' is not initialized.");
            return res.status(500).json({ success: false, error: "Database not initialized" });
        }

        const userProfile = await profile.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });

        console.log("Profile found:", userProfile);

        if (!userProfile) {
            return res.status(404).json({ success: false, error: "Profile not found" });
        }

        delete userProfile.password; // Exclude password for security

        res.status(200).json({ success: true, data: userProfile });
    } catch (err) {
        console.error("Error fetching profile:", err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});





// POST: Add a new user
app.post('/profile', async (req, res) => {
    try {
        const newProfile = req.body;
        const result = await profile.insertOne(newProfile);
        res.status(201).send(`User added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
    }
});


// PATCH: Partially update a user
app.patch('/profile/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const updates = req.body;

        const result = await profile.updateOne(
            { username: username },
            { $set: updates } // Apply updates dynamically from request body
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ success: false, message: "Profile not found or no changes made" });
        }

        res.status(200).json({ success: true, message: "Profile updated successfully" });
    } catch (err) {
        console.error("Error updating profile:", err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


app.patch('/users/:userId/premium', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log("Received userId:", userId); // Debug log
        
        const result = await users.updateOne(
            { userId: userId },
            { $set: { isPremium: true } }
        );

        if (result.matchedCount === 0) {
            console.log("No matching user found for userId:", userId); // Debug log
            return res.status(404).send("User not found");
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error upgrading user to premium: " + err.message);
    }
});



// DELETE: Remove a user
app.delete('/profile/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const result = await profile.deleteOne({ username });

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "Profile not found" });
        }

        res.status(200).json({ success: true, message: "Profile deleted successfully" });
    } catch (err) {
        console.error("Error deleting profile:", err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});
