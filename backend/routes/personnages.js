const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const {
    readAllPersonnages,
    readAllByNameAscending,
    readAllByNameDescending,
    searchByName
} = require('../models/personnages');
const { log } = require('console');

const router = express.Router();

app.use('/images', express.static(path.join(__dirname, 'assets/img')));

/**
 * Return all personnages ordered by appariation
 */
router.get('/', (req, res) => {
    const personnages = readAllPersonnages();
    if (personnages.length === 0) {
        res.status(404).json({ message: 'No personnages found' });
        return;
    }
    personnages.forEach(element => {
        const imagePath = path.join(__dirname, '../assets/img', element.id + '.webp');
        if (!fs.existsSync(imagePath)) {
            return;
        }
        const imageAsBase64 = fs.readFileSync(imagePath, 'base64');
        element.image = `data:image/jpeg;base64,${imageAsBase64}`;
    });
    res.json(personnages);
});

router.get('/:id', (req, res) => {
    const personnages = readAllPersonnages();
    const id = req.params.id;
    const personnagesFiltered = personnages.filter(personnage => personnage.id == id);
    if (personnagesFiltered.length === 0) {
        res.status(404).json({ message: 'No personnages found' });
        return;
    }
    const personnagesFound = personnagesFiltered[0];
    const imagePath = path.join(__dirname, '../assets/img', personnagesFound.id + '.webp');
    if (!fs.existsSync(imagePath)) {
        res.json(personnagesFound);
        return;
    }
    const imageAsBase64 = fs.readFileSync(imagePath, 'base64');
    personnagesFound.image = `data:image/jpeg;base64,${imageAsBase64}`;
    res.json(personnagesFound);
});

/**
 * Return all personnages ordered by name ascending
 */
router.get('/name-ascending', async (req, res) => {
    const personnages = readAllByNameAscending();
    res.json(personnages);
});

/**
 * Return all personnages ordered by name descending
 */
router.get('/name-descending', async (req, res) => {
    const personnages = readAllByNameDescending();
    res.json(personnages);
});

/**
 * Search personnages by name
 */
router.get('/search', async (req, res) => {
    const name = req?.body?.name;
    if (!name || name === '' || name === undefined || name === null || name.length === 0) {
        res.status(400).json({ message: 'Missing name' });
        return;
    }
    const personnages = searchByName(name);
    res.json(personnages);
});


module.exports = router;
