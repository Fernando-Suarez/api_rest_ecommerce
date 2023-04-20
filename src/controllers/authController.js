const postSignup = async (req, res) => {
	const { _id, username, email, name, phone } = req.user;
	const user = { _id, username, email, name, phone };
	try {
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};

const postLogin = async (req, res) => {
	try {
		if (!req.user) return res.status(400).json('Invalid Credentials');
		req.session.user = {
			username: req.user.username,
			email: req.user.email,
			name: req.user.name,
			phone: req.user.phone,
		};
		res.status(200).json(req.user);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getLogin = async (req, res) => {
	try {
		res.json(' form login');
	} catch (error) {
		res.status(500).json(error);
	}
};

const getSignup = async (req, res) => {
	try {
		res.status(200).json(' form singup');
	} catch (error) {
		res.status(500).json(error);
	}
};

const failSignUp = (req, res) => {
	try {
		res.status(200).json({ error: 'Failed Sign Up' });
	} catch (error) {
		res.status(500).json(error);
	}
};

const failLogin = (req, res) => {
	try {
		res.status(200).json({ error: 'Failed login' });
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	postSignup,
	postLogin,
	getLogin,
	getSignup,
	failLogin,
	failSignUp,
};
