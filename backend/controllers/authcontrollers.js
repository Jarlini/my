// // // controllers/authController.js
// // const User = require('../models/user');
// // const Admin = require('../models/admin');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // require('dotenv').config();

// // const registerUser = async (req, res) => {
// //   const { username, email, password } = req.body;
// //   try {
// //     const newUser = new User({ username, email, password });
// //     await newUser.save();
// //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.status(201).json({ token, user: { id: newUser._id, username: newUser.username } });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const registerAdmin = async (req, res) => {
// //   const { username, email, password, adminKey } = req.body;
// //   try {
// //     if (adminKey !== process.env.ADMIN_KEY) {
// //       return res.status(401).json({ msg: 'Invalid admin key' });
// //     }
// //     const newAdmin = new Admin({ username, email, password, adminKey });
// //     await newAdmin.save();
// //     const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.status(201).json({ token, admin: { id: newAdmin._id, username: newAdmin.username } });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const loginUser = async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(404).json({ msg: 'User not found' });
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token, user: { id: user._id, username: user.username } });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const loginAdmin = async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const admin = await Admin.findOne({ email });
// //     if (!admin) return res.status(404).json({ msg: 'Admin not found' });
// //     const isMatch = await bcrypt.compare(password, admin.password);
// //     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
// //     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token, admin: { id: admin._id, username: admin.username } });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // module.exports = { registerUser, registerAdmin, loginUser, loginAdmin };
// // controllers/authController.js
// const User = require('../models/user');
// const Admin = require('../models/admin');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // Register User
// const registerUser = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ username, email, password: hashedPassword });

//     // Save user to the database
//     await newUser.save();

//     // Generate JWT token
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Respond with token and user data
//     res.status(201).json({ token, user: { id: newUser._id, username: newUser.username } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Register Admin
// const registerAdmin = async (req, res) => {
//   const { username, email, password, adminKey } = req.body;
//   try {
//     // Verify admin key
//     if (adminKey !== process.env.ADMIN_KEY) {
//       return res.status(401).json({ msg: 'Invalid admin key' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new admin
//     const newAdmin = new Admin({ username, email, password: hashedPassword });

//     // Save admin to the database
//     await newAdmin.save();

//     // Generate JWT token
//     const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Respond with token and admin data
//     res.status(201).json({ token, admin: { id: newAdmin._id, username: newAdmin.username } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Login User
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: 'User not found' });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Respond with token and user data
//     res.json({ token, user: { id: user._id, username: user.username } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// // exports.registerUser = (req, res) => {
// //     const { username, email, password } = req.body;
// //     // Your registration logic here
// //     res.status(201).send("User registered successfully");
// // };


// // Login Admin
// const loginAdmin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Find admin by email
//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(404).json({ msg: 'Admin not found' });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     // Generate JWT token
//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Respond with token and admin data
//     res.json({ token, admin: { id: admin._id, username: admin.username } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// // exports.registerUser = (req, res) => {
// //     const { username, email, password } = req.body;
// //     // Your registration logic here
// //     res.status(201).send("User registered successfully");
// // };


// module.exports = { registerUser, registerAdmin, loginUser, loginAdmin };
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.register = async (req, res) => {
  const { username, email, password} = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ username, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({message :"Registered successfully",token});
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({message:"User sign in Successfully",token});
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
