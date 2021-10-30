const fs = require('fs');
var array = [];
var data = fs.readFileSync('./parse.txt','utf-8');
var res = data.split(`\n`);
res.forEach((value, key) => {
    var value = value.split('|');
    array.push({
        id : `node-${key}`,
        endpoint : `http://${value[0]}:8546/`,
        country : value[1],
        org : value[2],
        region : value[3]

    })
})

fs.writeFileSync('./rpc.json',JSON.stringify(array));