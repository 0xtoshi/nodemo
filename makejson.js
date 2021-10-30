var fs = require('fs');
var fetch = require('cross-fetch');

(async() => {

    var data = fs.readFileSync('./wss.txt','utf-8');
data = data.split("\n");
var json = [];
data.forEach(async (value, key) => {
    var dataIP = await getIP(value);
    //console.log(dataIP);
    
        var id = `node-${key}`;
        var endpoint = `${value}`;
        var country = await dataIP.country;
        var org = await dataIP.org;
        var region = await dataIP.region;

        console.log(`${endpoint}|${country}|${org}|${region}`);
    

  
    

    
});

async function getIP(ip){
    var get = await fetch(`https://ipinfo.io/${ip}/json?token=ac167738855231`);
    var data = await get.json();
    return data;
}


})()
