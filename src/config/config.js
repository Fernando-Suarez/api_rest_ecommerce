const dotenv = require('dotenv');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
	dotenv.config({
		path: path.resolve(process.cwd(), 'prod.env'),
	});
} else {
	dotenv.config({
		path: path.resolve(process.cwd(), 'dev.env'),
	});
}

module.exports = {
	HOST: process.env.HOST,
	PORT: process.env.PORT,

	// mongo
	SECRET_MONGO: process.env.SECRET_MONGO,
	MONGO_URI: process.env.MONGO_URI,

	// nodemailer gmail

	PORT_GMAIL: process.env.PORT_GMAIL,
	PASS_GMAIL: process.env.PASS_GMAIL,
	USER_GMAIL: process.env.USER_GMAIL,

	// twilio
	ACCOUNT_TWILIO: process.env.ACCOUNT_TWILIO,
	TOKEN_TWILIO: process.env.TOKEN_TWILIO,
	OWN_NUMBER: process.env.OWN_NUMBER,
	TEST_NUMBER: process.env.TEST_NUMBER,
};
