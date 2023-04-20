const getStore = require('../database/daos/factory');
const Order = getStore().orders;

const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.getAll();
		return res.status(200).json(orders);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getOrderById = async (req, res) => {
	const id = req.params.id;
	try {
		const order = await Order.getById(id);
		return res.status(200).json(order);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const saveOrder = async (req, res) => {
	const body = req.body;
	try {
		const orderCreated = await Order.create(body);
		return res.status(201).json(orderCreated);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const updateOrder = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	try {
		const orderUpdated = await Order.update(id, body);
		return res.status(200).json(orderUpdated);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const deleteOrder = async (req, res) => {
	const id = req.params.id;
	try {
		const orderDeleted = await Order.deleteById(id);
		return res.status(200).json(orderDeleted);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	getAllOrders,
	getOrderById,
	saveOrder,
	updateOrder,
	deleteOrder,
};
