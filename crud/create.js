const readFile = require("./read");
const writeData = require("./write");

function createTask(title, description) {
  const task = {
    title,
    description,
  };
  const tasks = readFile();
  tasks.push(task);
  writeData(tasks);
}
module.exports = createTask;
