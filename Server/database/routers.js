const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

    } catch (error) {
        res.send("ERROR CODE: ", error);
    }
})

module.exports = router;