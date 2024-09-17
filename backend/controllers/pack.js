// controllers/packageController.js
const Package = require('../models/packege');

// Add a new package
exports.addPackage = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newPackage = new Package({ name, description, price });
    await newPackage.save();
    res.json({ message: 'Package added successfully', package: newPackage });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all packages
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get package by ID
exports.getPackageById = async (req, res) => {
  const { id } = req.params;

  try {
    const pkg = await Package.findById(id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(pkg);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Update a package
exports.updatePackage = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const pkg = await Package.findById(id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }

    pkg.name = name || pkg.name;
    pkg.description = description || pkg.description;
    pkg.price = price || pkg.price;

    await pkg.save();
    res.json({ message: 'Package updated successfully', package: pkg });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  const { id } = req.params;

  try {
    const pkg = await Package.findById(id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }

    await Package.findByIdAndDelete(id);
    res.json({ message: 'Package deleted successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
