const connection = require("./connection")

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const getTask = async (id) => {
    const [task] = await connection.execute("SELECT * FROM tasks WHERE id = ?", [id]);

    return task;
};

const createTask = async (task) => {
    const { title, content } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "INSERT INTO tasks(title, content, created_at) VALUES( ?, ?, ?)";

    const [result] = await connection.execute(query, [title, content, dateUTC]);

    const [createdTask] = await connection.execute("SELECT * FROM tasks WHERE id = ?", [result.insertId])

    return createdTask;

}

const deleteTask = async (id) => {
    const removedTask = await connection.execute("DELETE FROM tasks WHERE id = ?", [id])

    return removedTask
}

const updateTask = async (id, task) => {

    const {title, content} = task

    const query = "UPDATE tasks SET title = ?, content = ? WHERE id = ?"

    await connection.execute(query, [title, content, id])

    const [updatedTask] = await connection.execute("SELECT * FROM tasks WHERE id = ?", [id])

    return updatedTask
}


module.exports = {
    getAll,
    getTask,
    createTask,
    deleteTask,
    updateTask,
}