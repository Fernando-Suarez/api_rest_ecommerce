const ContainerMongo = require('../../../services/mongoContainer');
const Order = require('../../models/Order');

class DaoOrderMongo extends ContainerMongo {
	constructor() {
		super(Order);
	}
}
module.exports = DaoOrderMongo;
