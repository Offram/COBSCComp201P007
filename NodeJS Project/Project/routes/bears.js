const { Router } = require("express");
const Bear = require("../models/bear");
const router = Router();

//GET ALL
router.get("/", async (req, res) => {
    try {
        let bears = await Bear.find();
        res.send(bears);
    } catch (ex) {
        return res.status(500).send("Error", ex.message);
    }
});

router.get("/:bearId", (req, res) => {
    let bearId = parseInt(req.params.bearId);
    console.log("bearId: ", bearId);

    let bear = bearArray.find((b) => {
        return b.id === bearId;
    });
    if (!bear) {
        return res.status(404).send("Given ID does not exist");
    }
    res.send(bear);
});

//POST
router.post("/", async (req, res) => {

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
router.put("/:bearId", (req, res) => {
    let bearId = parseInt(req.params.bearId);
    let bear = bearArray.find((b) => {
        return b.id === bearId;
    });

    if (!bear) {
        return res.status(404).send("The given ID does not exist");
    }

    bear.name = req.body.name;
    res.send(bear);
})

//DELETE
router.delete("/:bearId", (req, res) => {

    let bearId = parseInt(req.params.bearId);
    let bear = bearArray.find((b) => {
        return b.id === bearId;
    });

    if (!bear) {
        return res.status(404).send("The given ID does not exist");
    }

    let bearIndex = bearArray.indexOf(bear);
    bearArray.splice(bearIndex, 1);

    res.send(bear);
});

module.exports = router;