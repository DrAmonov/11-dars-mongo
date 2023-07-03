const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');
const Admins = require('../models/Admin');

exports.adminLogin = async (req, res) => {
	const { email, password } = req.body;

	const admin = await Admins.findOne({ email });
	if (!admin) {
		return res.status(403).json({ error: 'Incorrect email or password!' });
	}
	const comparePassword = await bcrypt.compare(password, admin.password);
	if (!comparePassword) {
		return res.status(403).json({ error: 'Incorrect email or password!' });
	}
	const token = jwt.sign({ password: admin.id });
	res.cookie('token', token, { maxAge: 3000000000, secure: true });
	res.redirect('/dashboard');
};

exports.loginPage = async (req, res) => {
	res.render('adminLogin');
};

exports.dashboard = async (req, res) => {
	res.render('dashboard');
};
