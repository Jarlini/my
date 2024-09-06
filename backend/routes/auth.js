

// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const { register, login } = require('../controllers/authcontrollers');
// // const auth = require('../middleware/authmiddleware');

// // router.post('/register', register);
// // router.post('/login', login);

// // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const { register, login, getAllUsers, getUserById } = require('../controllers/authcontrollers');
// // const auth = require('../middleware/authmiddleware');
// // const adminAuth = require('../middleware/authmiddleware'); // Middleware for admin-specific routes

// // // Public routes
// // router.post('/register', register);
// // router.post('/login', login);

// // // Protected routes (requires authentication)
// // router.get('/users', auth, getAllUsers); // Example: Fetch all users (accessible by authenticated users)
// // router.get('/users/:id', auth, getUserById); // Example: Fetch user by ID

// // // Admin-specific routes (requires admin authentication)
// // router.delete('/users/:id', auth, adminAuth, deleteUser); // Example: Delete a user (admin only)
// // router.post('/users/:id/role', auth, adminAuth, updateUserRole); // Example: Update user role (admin only)

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { register, login, getAllUsers, getUserById, deleteUser, updateUserRole, getGroup1Users, getGroup2Users, getGroup3Users } = require('../controllers/authcontrollers');
// const auth = require('../middleware/authmiddleware');
// const adminAuth = require('../middleware/authmiddleware'); // Middleware for admin-specific routes
// const authController = require('../controllers/authcontrollers');
// // Public routes
// router.post('/login', authController.login); // Ensure `authController.login` is defined
// router.post('/register', authController.register); 
// // Protected routes (requires authentication)
// router.get('/users', auth, getAllUsers); // Fetch all users (accessible by authenticated users)
// router.get('/users/:id', auth, getUserById); // Fetch user by ID

// // Fetch users by groups
// router.get('/group1', getGroup1Users);
// router.get('/group2', getGroup2Users);
// router.get('/group3', getGroup3Users);

// // Delete user (admin only)
// router.delete('/users/:id', auth, adminAuth, deleteUser);

// // Update user role (admin only)
// router.post('/users/:id/role', auth, adminAuth, updateUserRole);

// // Fetch users for a specific group (fallback route)
// router.get('/:group', async (req, res) => {
//     try {
//         let users;
//         const group = req.params.group;

//         if (group === 'all') {
//             users = await User.find(); // Fetch all users
//         } else {
//             users = await User.find({ group }); // Fetch users based on group
//         }

//         res.json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });


// module.exports = router;
const express = require('express');
const router = express.Router();

// Import controller functions from authcontrollers
const { register, login, getAllUsers, getUserById, deleteUser, updateUserRole, getGroup1Users, getGroup2Users, getGroup3Users } = require('../controllers/authcontrollers');

// Middleware for authentication and admin routes
const auth = require('../middleware/authmiddleware');
const adminAuth = require('../middleware/authmiddleware');

// Public routes
router.post('/login', login);       // Login route
router.post('/register', register); // Registration route

// Protected routes (requires authentication)
router.get('/users', auth, getAllUsers);  // Fetch all users (authenticated users only)
router.get('/users/:id', auth, getUserById); // Fetch user by ID

// Fetch users by group
router.get('/group1', getGroup1Users);
router.get('/group2', getGroup2Users);
router.get('/group3', getGroup3Users);

// Admin-only routes
router.delete('/users/:id', auth, adminAuth, deleteUser);  // Delete user (admin only)
router.post('/users/:id/role', auth, adminAuth, updateUserRole); // Update user role (admin only)

module.exports = router;
