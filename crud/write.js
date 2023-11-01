const fs = require("fs");

    function writeData(data){
        const dataStringify = JSON.stringify(data, null, 2);
        fs.writeFileSync("data.json", dataStringify);
    }
module.exports = writeData;