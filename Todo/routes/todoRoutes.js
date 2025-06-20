<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodos, getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require("../controllers/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id",updateTodo);

=======
const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodos, getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require("../controllers/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id",updateTodo);

>>>>>>> 31e40b3 (Initial commit)
module.exports = router;