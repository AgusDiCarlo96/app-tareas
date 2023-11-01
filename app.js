const createTask = require("./crud/create.js");
const deleteTask = require("./crud/delete.js");
const readFile = require("./crud/read.js");

const comando = process.argv[2];
const firstParam = process.argv[3];
const secondParam = process.argv[4];

switch (comando) {
    case "crear":
        createTask(firstParam, secondParam);
        break;
    case "eliminar":
        deleteTask(firstParam);
        break;
    default:
        console.log("No se reconoció el comando");
        break;
}

