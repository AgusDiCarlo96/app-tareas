const readFile = require("./read");
const writeData = require("./write");

function deleteTask(title) {
  const tasks = readFile();
  let position;
  tasks.forEach((task, index) => {
    if (title === task.title) {
      position = index;
    }
  });
  if (index !== undefined) {
    tasks.splice(position, 1);
  }
  writeData(tasks);
}

    function deleteElement(title){
        const tasks = readFile();
        const newTasks = tasks.filter(tarea => tarea.title !== title)
        writeData(newTasks);
    }

module.exports = deleteTask;
