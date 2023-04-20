const {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/productController');

const routerProducts = require('express').Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/:id', getProductById);

routerProducts.post('/', createProduct);

routerProducts.put('/:id', updateProduct);
routerProducts.delete('/:id', deleteProduct);
module.exports = routerProducts;
