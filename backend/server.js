const express = require('express')
const Db = require('./model/connection')
var cors = require('cors')
var tablerouter = require('./route/tableroutes')
var waiterrouter = require('./route/waiterroute')
var menurouter = require('./route/menuroutes')
var billrouter = require('./route/billroute')
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/table',tablerouter)
app.use('/waiter',waiterrouter)
app.use('/menu',menurouter)
app.use('/bill',billrouter)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/restaurant/build/index.html'));
});




app.listen(5000)