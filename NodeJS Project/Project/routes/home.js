const { Router } = require("express");
const router = Router();

//GET
router.get("/", (req, res) => {
    res.send("Hello Everyone, Welcome to the class");
});

module.exports = router;