const products = require('../Model/productModel')

//get all products from datbase
exports.getAllProducts = async (req,res)=>{
    try {
        const allproducts = await products.find()
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// get one product
exports.getProductController = async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try {
       const product = await products.find({id})
       res.status(200).json(product)
       
    } catch (error) {
       res.status(401).json(error)
       
    }
 }