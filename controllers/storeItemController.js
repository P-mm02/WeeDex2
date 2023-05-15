// const Item = require('../models/Item')

//     module.exports = (req, res) => {
//         Item.create(req.body).then(() => {
//             console.log("Item registered successfully!")
//             res.redirect('/')
//         }).catch((error) => {
//             // console.log(error.errors)
    
//             if (error) {
//                 const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
//                 req.flash('validationErrors', validationErrors)
//                 req.flash('data', req.body)
//                 return res.redirect('/register')
//             }
//         })
//     }