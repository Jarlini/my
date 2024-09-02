// routes/auth.js
// const express = require('express');
// const { registerUser, registerAdmin, loginUser, loginAdmin } = require('../controllers/authcontrollers');
// const router = express.Router();

// router.post('/register/user', registerUser);
// router.post('/register/admin', registerAdmin);
// router.post('/login/user', loginUser);
// router.post('/login/admin', loginAdmin);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authcontrollers');
const auth = require('../middleware/authmiddleware');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
