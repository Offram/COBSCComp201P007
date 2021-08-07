const { Router } = require("express");
const router = Router();

let studentsArray = [
    {
        "id": 1,
        "name": "Lane Beck"
    },
    {
        "id": 2,
        "name": "Nero Cooke"
    },
    {
        "id": 3,
        "name": "Cameron Burris"
    },
    {
        "id": 4,
        "name": "Ishmael Boyer"
    },
    {
        "id": 5,
        "name": "Amir Anthony"
    },
    {
        "id": 6,
        "name": "Hunter Ryan"
    },
    {
        "id": 7,
        "name": "Coby Hinton"
    },
    {
        "id": 8,
        "name": "Dara House"
    },
    {
        "id": 9,
        "name": "Eagan Dudley"
    },
    {
        "id": 10,
        "name": "Flavia Campbell"
    },
    {
        "id": 11,
        "name": "Hope Cross"
    },
    {
        "id": 12,
        "name": "Carolyn Mcdonald"
    },
    {
        "id": 13,
        "name": "Aline Horton"
    },
    {
        "id": 14,
        "name": "Calista Schroeder"
    },
    {
        "id": 15,
        "name": "Leroy Mcknight"
    },
    {
        "id": 16,
        "name": "Daria Webster"
    },
    {
        "id": 17,
        "name": "Serena Ramos"
    },
    {
        "id": 18,
        "name": "Pamela Faulkner"
    },
    {
        "id": 19,
        "name": "Tate Potter"
    },
    {
        "id": 20,
        "name": "Tamekah Shannon"
    },
    {
        "id": 21,
        "name": "Kieran Leonard"
    },
    {
        "id": 22,
        "name": "Illiana Greer"
    },
    {
        "id": 23,
        "name": "Leo Benson"
    },
    {
        "id": 24,
        "name": "Lucian Pearson"
    },
    {
        "id": 25,
        "name": "Cheyenne Buck"
    },
    {
        "id": 26,
        "name": "Todd Hays"
    },
    {
        "id": 27,
        "name": "Melanie Roy"
    },
    {
        "id": 28,
        "name": "Jescie Alford"
    },
    {
        "id": 29,
        "name": "Yardley Pugh"
    },
    {
        "id": 30,
        "name": "Barclay Gonzalez"
    },
    {
        "id": 31,
        "name": "Bo Le"
    },
    {
        "id": 32,
        "name": "Hayley Houston"
    },
    {
        "id": 33,
        "name": "Meghan Graham"
    },
    {
        "id": 34,
        "name": "Katell Valdez"
    },
    {
        "id": 35,
        "name": "Bree Terry"
    },
    {
        "id": 36,
        "name": "Flynn Brown"
    },
    {
        "id": 37,
        "name": "Amena Bowers"
    },
    {
        "id": 38,
        "name": "Carter Frye"
    },
    {
        "id": 39,
        "name": "Dale Herring"
    },
    {
        "id": 40,
        "name": "Henry Cortez"
    },
    {
        "id": 41,
        "name": "Macy Wooten"
    },
    {
        "id": 42,
        "name": "Guy Britt"
    },
    {
        "id": 43,
        "name": "Uriel Rutledge"
    },
    {
        "id": 44,
        "name": "Zelenia Stevenson"
    },
    {
        "id": 45,
        "name": "Shelley Singleton"
    },
    {
        "id": 46,
        "name": "Hilary Potter"
    },
    {
        "id": 47,
        "name": "Suki Rutledge"
    },
    {
        "id": 48,
        "name": "Macaulay Bond"
    },
    {
        "id": 49,
        "name": "Raya Durham"
    },
    {
        "id": 50,
        "name": "Galvin Willis"
    }
];

//GET ALL
router.get("/", (req, res) => {
    res.send(studentsArray);
});

//Get one
router.get("/:studentId", (req, res) => {
    let studentId = parseInt(req.params.studentId);

    let student = studentsArray.find((b) => {
        return b.id === studentId;
    });
    if (!student) {
        return res.status(404).send("Given ID does not exist");
    }
    res.send(student);
});

//POST
router.post("/", (req, res) => {

    if (!req.body.name) {
        return res.status(400).send("Not all mandatory values are set");
    }
    let newStudentObj = {
        id: studentsArray.length + 1,
        name: req.body.name
    }
    studentsArray.push(newStudentObj);
    res.send(newStudentObj);
})

//PUT
router.put("/:studentId", (req, res) => {
    let studentId = parseInt(req.params.studentId);
    let student = studentsArray.find((b) => {
        return b.id === studentId;
    });

    if (!student) {
        return res.status(404).send("The given ID does not exist");
    }

    student.name = req.body.name;
    res.send(student);
})

//DELETE
router.delete("/:studentId", (req, res) => {

    let studentId = parseInt(req.params.studentId);
    let student = studentsArray.find((b) => {
        return b.id === studentId;
    });

    if (!student) {
        return res.status(404).send("The given ID does not exist");
    }

    let studentIndex = studentsArray.indexOf(student);
    studentsArray.splice(studentIndex, 1);

    res.status(200).send("Student deleted succesfully");
});

module.exports = router;
