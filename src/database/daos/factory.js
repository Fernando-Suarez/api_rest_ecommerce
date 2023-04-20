const DaoProductMongo = require('./daosMongo/daoProduct');
const DaoCartMongo = require('./daosMongo/daoCart');
const DaoOrderMongo = require('./daosMongo/daoOrder');
const DaoUserMongo = require('./daosMongo/daoUser');

const getStore = () => {
	const storage = process.argv[2] || 'mongo';

	switch (storage) {
		case 'mongo':
			return {
				products: new DaoProductMongo(),
				carts: new DaoCartMongo(),
				users: new DaoUserMongo(),
				orders: new DaoOrderMongo(),
			};
			break;
		// case 'firebase':
		// 	return {
		// 		products: new productosDaoFirebase(),
		// 		cart: new carritoDaoFirebase(),
		// 		users: new mensajesDaoFirebase(),
		// 		orders: new ordenesDaoFirebase(),
		// 	};
		// 	break;
	}
};

module.exports = getStore;
