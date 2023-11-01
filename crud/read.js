const fs = require("fs");

function readFile() {
    const data = fs.readFileSync("./data.json", "utf-8");
    if (!data) {
        return []
    }
    const dataJson = JSON.parse(data)
    return dataJson
}

module.exports = readFile;