const passport = require('passport');
const {
	postSignup,
	postLogin,
	getLogin,
	getSignup,
	failLogin,
	failSignUp,
} = require('../controllers/authController');
const routerAuth = require('express').Router();

routerAuth.post(
	'/signup',
	passport.authenticate('signup', { failureRedirect: '/auth/failsignup' }),
	postSignup
);

routerAuth.post(
	'/login',
	passport.authenticate('login', { failureRedirect: '/auth/faillogin' }),
	postLogin
);
routerAuth.get('/login', getLogin);
routerAuth.get('/signup', getSignup);
routerAuth.get('/faillogin', failLogin);
routerAuth.get('/failsignup', failSignUp);

module.exports = routerAuth;
