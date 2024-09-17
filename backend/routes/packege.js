const express = require('express');
const router = express.Router();
const { Package } = require('../models/packege');

// Get all packages
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/packege', async (req, res) => {
    const { title, price, description, duration } = req.body;

    const newPackage = new Package({
        title,
        price,
        description,
        duration
    });

    try {
        const savedPackage = await newPackage.save();
        res.status(201).json(savedPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Update an existing package
router.put('/:id', async (req, res) => {
    try {
        const package = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!package) return res.status(404).json({ message: 'Package not found' });
        res.json(package);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a package
router.delete('/:id', async (req, res) => {
    try {
        const package = await Package.findByIdAndDelete(req.params.id);
        if (!package) return res.status(404).json({ message: 'Package not found' });
        res.json({ message: 'Package deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
