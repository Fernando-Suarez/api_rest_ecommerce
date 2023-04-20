const MongoStore = require('connect-mongo');
const config = require('../../config/config');

const configSessionMongo = {
	//*persistencia por mongo
	store: MongoStore.create({
		mongoUrl: `${config.MONGO_URI}`,
		mongoOptions: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	}),
	//*----------------------------------
	secret: `${config.SECRET_MONGO}`,
	cookie: {
		httpOnly: false,
		secure: false,
		maxAge: 6000000,
	},
	resave: false,
	saveUninitialized: false,
};

module.exports = configSessionMongo;
