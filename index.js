const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const path = require('path')
const bodyParser = require("body-parser")

mongoose.connect('mongodb+srv://admin:admin@wee.w2msf6d.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error',()=>console.log("Error Connecting to WeeDex Database"))
db.once('open',()=>console.log("Connected to WeeDex Database"))

const indexController = require('./controllers/indexController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))
app.use(expressSession({
    secret: "node secret"
}))

app.get('/', indexController)

app.post("/sell_regis",(req,res)=>{    
    
    var today = new Date()
    var regisTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var name = req.body.name
    var game = req.body.game
    var price = req.body.price
    var id = req.body.id
    var password = req.body.password
    var email = req.body.email
    var address = req.body.adress
    var img1 = req.body.sellImg1
    var img2 = req.body.sellImg2

    var data = {
        "regisTime": regisTime,
        "name": name,
        "gameName": game,
        "price": price,
        "id": id,
        "password": password,
        "e-mail": email,
        "address": address,
        "img1": img1
        ,
        "img2": img2        
    }

    db.collection('item').insertOne(data,(err,collection)=>{
        if(err){
            throw err
        }
        console.log("Record Inserted Successfully")
    });

    return 0

})

app.post("/buy_item",(req,res)=>{
    var no = req.body.no
    var today = new Date()
    var regisTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var name = req.body.name
    var game = req.body.game
    var price = req.body.price
    var address = req.body.address

    var data = {
        "no": no,
        "regisTime": regisTime,
        "name": name,
        "gameName": game,
        "price": price,
        "address": address      
    }
    db.collection('buylist').insertOne(data,(err,collection)=>{
        if(err){ 
            throw err
        }
        console.log("Record Inserted Successfully")
    });

    return res.redirect('/')

})

app.post("/add_member",(req,res)=>{    
    var today = new Date()
    var regisTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var address = req.body.address
    var rank = "member"

    var data = {
        "regisTime": regisTime,
        "address": address,
        "rank" : rank     
    }
    db.collection('member').insertOne(data,(err,collection)=>{
        if(err){ 
            throw err
        }
        console.log("Record Inserted Successfully")
    });
    return 0
})

app.post("/verify",(req,res)=>{    
    
    var today = new Date()
    var regisTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var birthDate = req.body.birth
    var pn = req.body.pn
    var password = req.body.password
    var email = req.body.email
    var homeAddress = req.body.homeAddress
    var address = req.body.address
    var img1 = req.body.img1
    var img2 = req.body.img2

    var data = {
        "regisTime": regisTime,
        "firstName": firstName,
        "lastName": lastName,
        "birthDate": birthDate,
        "e-mail": email,
        "homeAddress": homeAddress,        
        "address": address,
        "img1": img1,
        "img2": img2        
    }

    db.collection('verify').insertOne(data,(err,collection)=>{
        if(err){
            throw err
        }
        console.log("Record Inserted Successfully")
    });

    return 0

})

app.listen(4000, () => {
    console.log("WeeDex listening on port 4000")
})
