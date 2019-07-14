let port = '4000';
let host = '127.0.0.1';

let dbUrl = "mongodb://localhost:27017/graphs";
// let dbUrl = "mongodb://Rahul:password@localhost:27017/graphs";
let dbUsr = "Rahul";
let dbPwd = "password";
let dbName = "graphs";
let authSource = "graphs";

let scrtKey = "task";

module.exports = {
    HOST: host,
    PORT: port,
    DBUSR: dbUsr,
    DBURL: dbUrl,
    DBPWD: dbPwd,
    DBNAME: dbName,
    authSource: authSource,
    SCRTKEY: scrtKey
}