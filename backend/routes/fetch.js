const express = require('express');
const router = express.Router();
const axios = require('axios');
const quad = require('../models/Quadb');

const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// Router 1: Storing into the database
router.get('/storedata', (req, res) => {
    axios.get(apiUrl).then(async response => {
        try {
            const data = response.data;
            // Iterate over each object in the data
            await quad.deleteMany();
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const objectData = data[key];

                    // Save each object to MongoDB
                    await quad.create(objectData);
                }
            }

            // await quad.insertMany(data);
            res.json({ message: 'Data fetched and saved to MongoDB' });
        } catch (error) {
            console.error('Error fetching and saving data:', error);
            res.status(500).json({ error: 'An error occurred while storing data' });
        }
    }).catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    });
});

// Router 2: Fetch top 10 data from the database
router.get('/fetchtopdata', async (req,res) => {
    const entries = await quad.find().limit(10).exec();
    res.json(entries);
});

// Router 3: Fetch all data from the database
router.get('/fetchdata', async (req,res) => {
    const entries = await quad.find();
    res.json(entries);
});

module.exports = router