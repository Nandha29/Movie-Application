const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"userdata"
})

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

app.post("/data",(req,res)=>{
    const name2 = req.body.name1
    const email = req.body.email
    const password = req.body.password

    const queryvalue = "insert into details('name','email','password') values ?,?,?"
    db.query(queryvalue,[name2, email, password],(err,result)=>{
        res.send(result)
        res.send("data received...")
    })
    
})
app.listen(3000,()=>{
    console.log("server listening....");
})
