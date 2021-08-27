const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    user : '',
    host : 'localhost',
    password : '',
    database : 'try'
})

app.listen(3001, () =>{
    console.log("Server is running")
    
})