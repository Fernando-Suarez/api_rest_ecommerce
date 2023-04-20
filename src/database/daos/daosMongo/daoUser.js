const ContainerMongo = require('../../../services/mongoContainer');
const User = require('../../models/User');

class DaoUserMongo extends ContainerMongo {
	constructor() {
		super(User);
	}
}
module.exports = DaoUserMongo;
