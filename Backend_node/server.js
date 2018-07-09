const express = require('express')
const bodyparser = require('body-parser')
const mysql =require('mysql2')
const path = require('path');
const cors = require('cors');

// const dbcart=require('./mysql_queries/cartlist/dbcart');
// const dblist=require('./mysql_queries/inventorylist/dblist');
// const dbuser=require('./mysql_queries/userlist/dbuser');

const app = express();

app.use(bodyparser.urlencoded({  extended:true}));

app.use(bodyparser.json());

app.use(cors());

const route = require('./routes/route')

app.use('/api',route)

// app.use(express.static(__dirname + '/public/prac1/dist'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res)=>{
    res.send("hello ujjwal")
})



let PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server started on http://localhost:3000")
})
