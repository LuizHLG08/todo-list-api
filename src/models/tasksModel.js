const connection = require("./connection")

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTask = async (task) => {
    const { title, content } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "INSERT INTO tasks(title, content, created_at) VALUES( ?, ?, ?)";

    const createdTask = await connection.execute(query, [title, content, dateUTC]);

    return createdTask;
}

const deleteTask = async (id) => {
    const removedTask = await connection.execute("DELETE FROM tasks WHERE id = ?", [id])

    return removedTask
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
}