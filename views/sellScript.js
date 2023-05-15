// function submitSellData(){
     

//     var today = new Date();
//     var regisTime = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
//     var name = $("#sellName").val()
//     var gameName = $("#sellGameName").val()
//     var price =$("#sellPrice").val()
//     var id = $("#sellId").val()
//     var password = $("#sellPassword").val()
//     var eMail = $("#sellEmail").val()
//     // var walletAddress =$('#').val()

//     jsonObject={
//         "regisTime": "",
//         "name": "",
//         "gameName": "",
//         "price": "",
//         "id": "",
//         "password": "",
//         "e-mail": "",
//         "address": ""
//     }
//     jsonObject.regisTime=regisTime
//     jsonObject.name=name
//     jsonObject.gameName=gameName
//     jsonObject.price=price
//     jsonObject.id=id
//     jsonObject.password=password
//     jsonObject.eMail=eMail
//     jsonObject.address=""

//     console.log(jsonObject)
//     var str = JSON.stringify(jsonObject)
//     console.log(str)

//     const mongoose = require('mongoose')
//     // const Schema = mongoose.Schema
//     // Schema = jsonObject 
       
//     const Item = mongoose.model('Item', jsonObject)
//     module.exports = Item
// }