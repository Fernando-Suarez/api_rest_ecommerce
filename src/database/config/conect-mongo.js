const { connect, set } = require('mongoose');
const config = require('../../config/config');

class Database {
	static instance = null;

	constructor() {
		set('strictQuery', false);
		connect(config.MONGO_URI)
			.then(() => console.log('info', '✅ DB ON'))
			.catch((e) => console.log('error', ` ❌ DB OFF ${e}`));
	}
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const mongoDB = Database.getInstance();

module.exports = { mongoDB };
