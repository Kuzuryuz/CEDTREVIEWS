const express = require('express');
const router = express.Router();
const Items = require('./db');

router.get('/', async (req, res) => {
    const [item104, item222, item252] = await Promise.all([
        Items.find({ subject: '2110104' }).sort({ createdAt: -1 }),
        Items.find({ subject: '2110222' }).sort({ createdAt: -1 }),
        Items.find({ subject: '2110252' }).sort({ createdAt: -1 })
    ]);

    res.json({ item104, item222, item252 });
});

router.post('/', async (req, res) => {
    await Items(req.body).save();
    res.status(200).json({ message: "OK" });
});

module.exports = router;