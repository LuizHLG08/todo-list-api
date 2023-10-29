const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post("/tasks",tasksMiddleware.validateBody, tasksController.createTask);
router.post("/tasks/:id", tasksController.deleteTask);

module.exports = router;