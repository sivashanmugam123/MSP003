var mysql = require('mysql');
var fs = require('fs');
var db = mysql.createPool({
    connectionLimit : 10,
    host:"sql1233.mysql.database.azure.com",
    user:"nethrasiva",
    password:"Welcome123!",
    database:"cutoff",
    port: 3306,
    ssl: {ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")}
});
// db.connect(
//     function (err) { 
//     if (err) { 
//         console.log("!!! Cannot connect !!! Error:");
//         throw err;
//     }
//     else
//     {
//        console.log("Connection established.");
           
//     }
// });
module.exports = db;