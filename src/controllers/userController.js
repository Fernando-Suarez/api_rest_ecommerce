const getStore = require('../database/daos/factory');
const User = getStore().users;

const getAllUsers = async (req, res) => {
	try {
		const users = await User.getAll();
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getUserById = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.getById(id);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const updateUser = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	try {
		const userUpdated = await User.update(id, body);
		return res.status(200).json(userUpdated);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		const userDelete = await User.deleteById(id);
		return res.status(200).json(userDelete);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
