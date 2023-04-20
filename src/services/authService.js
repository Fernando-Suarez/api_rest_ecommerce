const passport = require('passport');
const local = require('passport-local');
const User = require('../database/models/User');
const { createHash, isValidPassword } = require('../utils/authFunctions');
const LocalStrategy = local.Strategy;
//*passport config LocalStrategy Login
const initializePassport = () => {
	passport.use(
		'signup',
		new LocalStrategy(
			{
				passReqToCallback: true,
				usernameField: 'email',
			},
			async (req, username, password, done) => {
				try {
					const user = await User.findOne({ email: username });
					if (user) {
						console.log('User already exists');
						return done(null, false);
					}
					let newUser = {
						username: req.body.username,
						email: req.body.email,
						password: createHash(password),
						name: req.body.name,
						phone: req.body.phone,
					};
					let result = await User.create(newUser);
					return done(null, result);
				} catch (error) {
					return done('error get to user', +error);
				}
			}
		)
	);

	passport.use(
		'login',
		new LocalStrategy(
			{ usernameField: 'email' },
			async (username, password, done) => {
				try {
					const user = await User.findOne({ email: username });
					if (!user) {
						console.log(`User Not Found With Username ${username}`);
						return done(null, false);
					}
					if (!isValidPassword(user, password)) {
						console.log('Invalid Password');
						return done(null, false);
					}
					return done(null, user);
				} catch (error) {
					return done(error);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async (id, done) => {
		let user = await User.findById(id);
		done(null, user);
	});
};

module.exports = initializePassport;
