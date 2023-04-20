const getStore = require('../database/daos/factory');
const Cart = getStore().carts;

const getAllCarts = async (req, res) => {
	try {
		const carts = await Cart.getAll();
		return res.status(200).json(carts);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getCartById = async (req, res) => {
	const id = req.params.id;
	try {
		const cart = await Cart.getById(id);
		return res.status(200).json(cart);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const saveCart = async (req, res) => {
	const body = req.body;
	try {
		const cartCreated = await Cart.create(body);
		res.status(201).json(cartCreated);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const updateCart = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	try {
		const cartUpdated = await Cart.update(id, body);
		return res.status(200).json(cartUpdated);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const deleteCart = async (req, res) => {
	try {
		const cartDeleted = await Cart.deleteById();
		return res.status(200).json(cartDeleted);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	getAllCarts,
	getCartById,
	saveCart,
	updateCart,
	deleteCart,
};
