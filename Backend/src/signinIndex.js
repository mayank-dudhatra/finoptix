// const express = require('express');
// const { MongoClient } = require('mongodb');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// const port = 3002;

// // MongoDB connection details
// const uri = "mongodb://127.0.0.1:27017";
// const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// // Middleware
// app.use(express.json());

// let db, signin;

// // Connect to MongoDB and initialize collections
// async function initializeDatabase() {
//     try {
//         const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         db = client.db(dbName);
//         signin = db.collection("signin"); // Initialize signin collection

//         // Start server after successful DB connection
//         app.listen(port, () => {
//             console.log(`Server running at http://localhost:${port}`);
//         });
//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err);
//         process.exit(1); // Exit if database connection fails
//     }
// }

// // Initialize Database
// initializeDatabase();

// // Login Route
// app.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Check if username and password are provided
//         if (!username || !password) {
//             return res.status(400).send("Username and password are required.");
//         }

//         // Find the user by username
//         const user = await signin.findOne({ username });

//         // If user doesn't exist
//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         // Compare the provided password with the hashed password in the database
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         // If password is invalid
//         if (!isPasswordValid) {
//             return res.status(401).send("Invalid credentials.");
//         }

//         // Generate a JWT token
//         const token = jwt.sign(
//             { userId: user.userId, username: user.username },
//             "your-secret-key", // Replace with a strong secret key
//             { expiresIn: "1h" } // Token expires in 1 hour
//         );

//         // Send the token in the response
//         res.status(200).json({ token });
//     } catch (err) {
//         res.status(500).send("Error during login: " + err.message);
//     }
// });

// // Protected Route Example (Requires JWT Authentication)
// app.get('/protected', async (req, res) => {
//     try {
//         const token = req.headers['authorization'];

//         // Check if token is provided
//         if (!token) {
//             return res.status(401).send("Access denied. No token provided.");
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, "your-secret-key");

//         // Fetch user details (optional)
//         const user = await signin.findOne({ userId: decoded.userId });

//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         // Send a success response
//         res.status(200).json({ message: "Access granted", user });
//     } catch (err) {
//         res.status(401).send("Invalid token: " + err.message);
//     }
// });




const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render("signin");
});


app.get("/signup", (req, res) => {
    res.render("signup");
});



const port = 3002;
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})