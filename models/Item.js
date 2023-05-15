// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const bcrypt = require('bcrypt')

// const ItemSchema = new Schema({
//     email: {
//         type: String,
//         required: [true, 'Please provide email']
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide password']
//     }
// })

// ItemSchema.pre('save', function(next) {
//     const item = this

//     bcrypt.hash(item.password, 10).then(hash => {
//         item.password = hash
//         next()
//     }).catch(error => {
//         console.error(error)
//     })
// })

// const Item = mongoose.model('Item', ItemSchema)
// module.exports = Item