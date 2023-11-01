const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.get("/tasks/:id", tasksController.getTask);
router.post("/tasks",tasksMiddleware.validateBody, tasksController.createTask);
router.delete("/tasks/:id",tasksMiddleware.validateId, tasksController.deleteTask);
router.put("/tasks/:id",tasksMiddleware.validateBody, tasksController.updateTask);

module.exports = router;