const jwt = require('../utils/jwt');

exports.tokenMiddleware = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.render('index');
	}
	const verifiedUser = jwt.verify(token);
	req.verifiedUser = verifiedUser.payload;
	next();
};
