const ContainerMongo = require('../../../services/mongoContainer');
const Cart = require('../../models/Cart');

class DaoCartMongo extends ContainerMongo {
	constructor() {
		super(Cart);
	}
}
module.exports = DaoCartMongo;
