require('dotenv').config;
const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	const x = Xray();

	return new Promise((resolve, reject) => {
		x(process.env.COINDESK_URL, '.article-featured', {
			articles: [
				{
					title: 'a@title',
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
