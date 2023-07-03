const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');
const Fruits = require('../models/Fruit');
const Messages = require('../models/Message');

exports.getFruits = async (req, res) => {
	const fruits = await Fruits.find();
	res.render('index', {
		fruits,
	});
};

exports.fruitPost = async (req, res) => {
	res.render('fruitPost');
};

exports.postFruit = async (req, res) => {
	const { fruitName } = req.body;
	const { imageName: image } = req;

	Fruits.create({
		fruitName,
		image,
	});
	res.redirect('/dashboard');
};

exports.postMessage = async (req, res) => {
	const { username, email, phone, comment } = req.body;

	Messages.create({ username, email, phone, comment });
	res.render('index');
};

exports.getMessages = async (req, res) => {
	const messages = await Messages.find();
	res.render('messages', {
		messages,
	});
};
