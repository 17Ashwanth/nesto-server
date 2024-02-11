const express = require('express')

const productsController = require('../Controller/productsController')
const userController = require('../Controller/usersController')
const wishlistController = require('../Controller/wishlistsController')
const cartController = require('../Controller/cartsController')

const jwtMiddleware = require('../Middileware/jwtMiddileware')


const router = new express.Router()

//get all products

router.get('/all-products',productsController.getAllProducts)

// register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)


// get a product
router.get('/get-product/:id',productsController.getProductController)

//add to wishlist
router.post('/add-wishlist',jwtMiddleware,wishlistController.addToWishlistController)

//get from wishlist
router.get('/wishlist/allproduct',jwtMiddleware,wishlistController.getFromWishlistController)

//remove item from wishlist
router.delete("/wishlist/removeItem/:id",jwtMiddleware,wishlistController.removeWishListController)

//add to cart
router.post('/add-cart',jwtMiddleware,cartController.addToCartController)

//get cart item
router.get('/cart/all-product',jwtMiddleware,cartController.getItemFromCartController)

//remove item from cart
router.delete('/cart/remove-item/:id',jwtMiddleware,cartController.removeItemController)

//increment cart
router.get('/cart/increment/:id',jwtMiddleware,cartController.increamentItem)

//decrement cart
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decreamentItem)

//empty entirecart
router.delete('/empty/all-cart',jwtMiddleware,cartController.emptyCartController)


module.exports=router