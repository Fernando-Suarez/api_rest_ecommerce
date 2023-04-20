const {
	getAllOrders,
	getOrderById,
	saveOrder,
	updateOrder,
	deleteOrder,
} = require('../controllers/orderController');
const routerOrders = require('express').Router();

routerOrders.get('/', getAllOrders);
routerOrders.get('/:id', getOrderById);
routerOrders.post('/', saveOrder);
routerOrders.put('/:id', updateOrder);
routerOrders.delete('/:id', deleteOrder);

module.exports = routerOrders;
