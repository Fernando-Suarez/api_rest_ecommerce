const getStore = require('../database/daos/factory');
const Product = getStore().products;

const getAllProducts = async (req, res) => {
	try {
		const allProducts = await Product.getAll();
		return res.status(200).json(allProducts);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getProductById = async (req, res) => {
	const id = req.params.id;

	try {
		const product = await getById(id);
		res.status(200).json(product);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const createProduct = async (req, res) => {
	const body = req.body;
	try {
		const productCreated = await saveProduct(body);
		res.status(201).json(productCreated);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const updateProduct = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	try {
		const productUpdated = await update(id, body);
		return res.status(200).json(productUpdated);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const deleteProduct = async (req, res) => {
	const id = req.params.id;
	try {
		const productDeleted = await deleteById(id);
		return res.status(200).json(productDeleted);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
