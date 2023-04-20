const {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/userController');
const routerUsers = require('express').Router();

routerUsers.get('/', getAllUsers);
routerUsers.get('/:id', getUserById);
routerUsers.put('/:id', updateUser);
routerUsers.delete('/:id', deleteUser);
module.exports = routerUsers;
