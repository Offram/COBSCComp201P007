const { Router } = require("express");
const router = Router();

let subjectsArray = [
    {
        "id": 1,
        "subject": "Mathematics"
    },
    {
        "id": 2,
        "subject": "Science"
    },
    {
        "id": 3,
        "subject": "History"
    },
    {
        "id": 4,
        "subject": "Health"
    },
    {
        "id": 5,
        "subject": "Commerce"
    },
    {
        "id": 6,
        "subject": "English"
    },
    {
        "id": 7,
        "subject": "Religion"
    },
    {
        "id": 8,
        "subject": "IT"
    },
    {
        "id": 9,
        "subject": "Aesthetic"
    },
    {
        "id": 10,
        "subject": "Literature"
    }
];

//GET ALL
router.get("/", (req, res) => {
    res.send(subjectsArray);
});

//Get one
router.get("/:subjectId", (req, res) => {
    let subjectId = parseInt(req.params.subjectId);

    let subject = subjectsArray.find((b) => {
        return b.id === subjectId;
    });
    if (!subject) {
        return res.status(404).send("Given ID does not exist");
    }
    res.send(subject);
});

//POST
router.post("/", (req, res) => {

    if (!req.body.name) {
        return res.status(400).send("Not all mandatory values are set");
    }
    let newSubjectObj = {
        id: subjectsArray.length + 1,
        name: req.body.name
    }
    subjectsArray.push(newSubjectObj);
    res.send(newSubjectObj);
})

//PUT
router.put("/:subjectId", (req, res) => {
    let subjectId = parseInt(req.params.subjectId);
    let subject = subjectsArray.find((b) => {
        return b.id === subjectId;
    });

    if (!subject) {
        return res.status(404).send("The given ID does not exist");
    }

    subject.name = req.body.name;
    res.send(subject);
})

//DELETE
router.delete("/:subjectId", (req, res) => {

    let subjectId = parseInt(req.params.subjectId);
    let subject = subjectsArray.find((b) => {
        return b.id === subjectId;
    });

    if (!subject) {
        return res.status(404).send("The given ID does not exist");
    }

    let subjectIndex = subjectsArray.indexOf(subject);
    subjectsArray.splice(subjectIndex, 1);

    res.status(200).send("subject deleted succesfully");
});

module.exports = router;