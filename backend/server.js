// // // // server.js
// // // const express = require('express');
// // // const connectDB = require('./config/db');
// // // const authRoutes = require('../backend/routes/auth');

// // // require('dotenv').config();

// // // const app = express();

// // // // Connect to Database

// // // app.use(cors());
// // // app.use(bodyParser.json());
// // // // Middleware
// // // app.use(express.json());

// // // app.use(express.urlencoded({ extended: false }));

// // // // Routes
// // // app.use('/api/auth', authRoutes);

// // // // Start Server
// // // const PORT = process.env.PORT || 6000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // const cors = require('cors');
// // // app.use(cors({
// // //   origin: 'http://localhost:3000', // Adjust according to your React app's URL
// // // }));


// // // const express = require('express');
// // // const cors = require('cors'); // Import cors package
// // // const dotenv = require('dotenv');
// // // const app = express();

// // // // Use cors middleware
// // // app.use(cors());

// // // // Your other middlewares and routes here
// // // app.use(express.json()); // Example middleware
// // // app.get('/', (req, res) => {
// // //     res.send('Hello World!');
// // // });

// // // const PORT = process.env.PORT || 6000;
// // // app.listen(PORT, () => {
// // //     console.log(`Server is running on port ${PORT}`);
// // // });

// // //  origin: 'http://localhost:3000'

// // // const express = require('express');
// // // const connectDB = require('./config/db');
// // // const app = express();
// // // const dotenv = require('dotenv');
// // // const authRoutes = require('./routes/auth');

// // // connectDB();

// // // app.use(express.json({ extended: false }));

// // // app.use('/api/auth', require('./routes/auth'));

// // // const PORT = process.env.PORT || 5000;

// // // app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// // // server.js
// // const express = require('express');
// // const connectDB = require('./config/db');
// // const authRoutes = require('./routes/auth'); // Adjust path if needed
// // const cors = require('cors');
// // const bodyParser = require('body-parser'); // Import body-parser

// // require('dotenv').config();

// // const app = express();

// // // Connect to Database
// // connectDB();

// // // Middleware
// // app.use(cors({
// //   origin: 'http://localhost:3000', // Adjust according to your React app's URL
// // }));
// // app.use(bodyParser.json());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));

// // // Routes
// // app.use('/api/auth', authRoutes);


// // app.post('/api/auth/register', (req, res) => {
// //     // Handle registration logic
// //     res.send({ token: 'dummyToken' });
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth'); // Ensure this path is correct
// require('dotenv').config();

// const app = express();

// // Connect to Database
// connectDB();

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend URL if different
//   }));  
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use('/api/auth', authRoutes);

// // Test Route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Ensure this path is correct
require('dotenv').config();

const app = express();

// Connect to the Database
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL if different
}));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
