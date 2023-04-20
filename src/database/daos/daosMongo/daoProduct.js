const ContainerMongo = require('../../../services/mongoContainer');
const Product = require('../../models/Product');

class DaoProductMongo extends ContainerMongo {
	constructor() {
		super(Product);
	}
}
module.exports = DaoProductMongo;
