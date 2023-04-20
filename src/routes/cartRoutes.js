const {
	getAllCarts,
	getCartById,
	saveCart,
	updateCart,
	deleteCart,
} = require('../controllers/cartController');
const routerCart = require('express').Router();

routerCart.get('/', getAllCarts);
routerCart.get('/:id', getCartById);
routerCart.post('/', saveCart);
routerCart.put('/:id', updateCart);
routerCart.delete('/:id', deleteCart);

module.exports = routerCart;
