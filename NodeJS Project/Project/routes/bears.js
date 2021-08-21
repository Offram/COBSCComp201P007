const { Router } = require("express");
const { ObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
const Bear = require("../models/bear");
const router = Router();

const SECRET_KEY = "jkljYUTYFG&%%754GfgfrY^$&53";

//GET ALL
router.get("/", async (req, res) => {
    try {
        let bears = await Bear.find();
        res.send(bears);
    } catch (ex) {
        return res.status(500).send("Error", ex.message);
    }
});

router.get("/:bearId", async (req, res) => {
    let bearId = req.params.bearId;
    let bear = await Bear.findById(bearId);
    if (!bear) {
        return res.status(404).send("Given ID does not exist");
    }
    res.send(bear);
});

//POST
router.post("/", async (req, res) => {

    const token = req.header("x-jwt-token");
    if (!token) {
        return res.status(401).send("Access denied. No token available");
    }

    try {
        jwt.verify(token, SECRET_KEY);
    } catch (e) {
        return res.status(400).send("Invalid token");
    }

    if (!req.body.name) {
        return res.status(400).send("Not all mandatory values are set");
    }


    let bear = new Bear({
        name: req.body.name,
        type: req.body.type,
        movies: req.body.movies,
        likeCount: req.body.likeCount,
        imgUrl: req.body.imgUrl,
        isScary: req.body.isScary
    });

    bear = await bear.save();
    res.send(bear);
})

//PUT
router.put("/:bearId", async (req, res) => {
    let bearId = req.params.bearId;
    let bear = await Bear.findOneAndUpdate({ _id: bearId }, { likeCount: req.body.likeCount });

    res.send(bear);
})

//DELETE
router.delete("/:bearId", async (req, res) => {

    const token = req.header("x-jwt-token");
    if (!token) {
        return res.status(401).send("Access denied. No token available");
    }
    try {
        jwt.verify(token, SECRET_KEY);
    } catch (e) {
        return res.status(400).send("Invalid token");
    }

    let decoded = jwt.decode(token, SECRET_KEY);
    if (!decoded.isAdmin) {
        return res.status(403).send("Forbidden - no authorization available");
    }

    let bearId = req.params.bearId;
    let bear = await Bear.findOneAndDelete({ _id: bearId });

    res.send(bear);
});

module.exports = router;