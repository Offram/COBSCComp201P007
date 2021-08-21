const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user");

router.post("/", async (req, res) => {
    try {
        console.log('1');
        let salt = await bcrypt.genSalt(10);
        let hashedpw = await bcrypt.hash(req.body.password.toString(), salt);

        console.log('2');
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpw,
            isAdmin: req.body.isAdmin
        });

        console.log('3');
        user = await user.save();

        console.log('4');
        return res.send({
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }
    catch (e) {
        console.log('5');
        return res.status(500).send(e.message);
    }
});

module.exports = router;