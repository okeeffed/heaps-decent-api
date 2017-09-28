require('dotenv').config;
const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	const x = Xray();
	return new Promise((resolve, reject) => {
		x(process.env.BITCOIN_MAGAZINE_URL, '.half-image-card', {
			articles: [
				{
					title: '.card-content a h4.headline',
					link: 'a@href'
				}
			]
		})((err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}
