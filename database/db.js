const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'192.168.1.8',
    user:'root',
    password:'SysSrv69',
    database:'parbras',
})

module.exports = conection
