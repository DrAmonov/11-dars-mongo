const { v4: uuid } = require('uuid');
const path = require('path');

const fileUpload = (req, res, next) => {
	const image = req.files?.image;

	const extname = path.extname(image.name);
	const imageName = `${uuid()}${extname}`;
	image.mv(`${process.cwd()}/uploads/${imageName}`);
	req.imageName = imageName;
	next();
};

module.exports = fileUpload;
