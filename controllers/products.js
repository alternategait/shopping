const fragranceProduct = require('../models/fragranceProduct')
const Todo = require('../models/fragranceProduct') // setting up variable Todo by telling it to go up a level then into models and into Todo

module.exports = { // as set up by todo routes line 15
    getProducts: async (req,res)=>{  // a promis syntax
        try{
            const safeProducts = await fragranceProduct.find() // variable connecting to Todo model then finding
            // const itemsLeft = await Todo.countDocuments({completed: false}) //variable connecting to Todo model then counting documents with completed status of false
            res.render('products.ejs', { products: safeProducts}) // respond with a render of 'todos.ejs pass todos info at variable written line 6 and left info as variable written line 7
        }catch(err){ //if there is an error
            console.log(err) // tell me what error in the console
        }
    },
    addProduct: async (req, res)=>{ // a promise syntax
        try{
            await fragranceProduct.create({type: req.body.productType, name: req.body.productName, brand: req.body.productBrand, scentType: req.body.productScent, notes: req.body.productNotes, likes: req.body.productLikes}) // go to Todo and create with todo feild holding todoItem from body of DOM with a completed feild of false   
            console.log('Product has been added!') // tell me in the console that it is done
            res.redirect('/products') //refresh the page with to route /todos
        }catch(err){ // if there is an error
            console.log(err) // tell me what error int he console
        }
    },
    // markComplete: async (req, res)=>{ // a promise syntax
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ //go to Todo and find and update the document that has an id number that matches todoIdFromJSFile
    //             completed: true // update completed to true
    //         })
    //         console.log('Marked Complete') //tell me in the console
    //         res.json('Marked Complete') // send the client JSON that tells them it's complete
    //     }catch(err){ // if there is an error
    //         console.log(err) // tell me what error in the console
    //     }
    // },
    // markIncomplete: async (req, res)=>{ // a promis syntax
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ // go to Todo and find and update the document that has an id number that matches todoIdFromJSFile (sent with the fetch request(
    //             completed: false // update completed to false
    //         })
    //         console.log('Marked Incomplete') // tell me it's incomplete
    //         res.json('Marked Incomplete') // send the client JSON that tell's them it's incomplete  
    //     }catch(err){ //if there is an error
    //         console.log(err) // tell me what error in the console
    //     }
    // },
    deleteProduct: async (req, res)=>{ // a promise syntax
        console.log(req.body.todoIdFromJSFile) // a console log (probably to check that we are gtting the id
        try{
            await fragranceProduct.findOneAndDelete({_id:req.body.todoIdFromJSFile}) // go to Todo and find and delete the document that has an id number that matches todoIdFromJSFile (sent with the fetch request)
            console.log('Deleted Product') // tell me it's deleted
            res.json('Deleted It') // Send the clinet JSON that tells them it's deleted
        }catch(err){ //if there is an error
            console.log(err) // tell me what error int eh console
        }
    }
}    