const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Authentication routes
const Triproutes = require('./routes/trip'); // Trip routes
const packageRoutes = require('./routes/packege'); // Fixed typo from 'packege' to 'package'
const userRoutes = require('./routes/auth'); // User routes (make sure you have this file)
require('dotenv').config();
const adminRoutes = require('./routes/Admin');




const app = express();

// Connect to the Databaseroutes
connectDB();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/trip', Triproutes); // Trip routes
app.use('/api/packages', packageRoutes); // Package routes
app.use('/api/users', userRoutes); // User routes


app.use('/api/admin/users', userRoutes);
app.use('/api/admin/trips', Triproutes);
app.use('/api/admin/packages', packageRoutes);
// app.use('/api/admin/groups', groupRoutes);
// // Test Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/uploads', express.static('uploads'));


// Admin routes
app.use('/api/admin', adminRoutes);


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
