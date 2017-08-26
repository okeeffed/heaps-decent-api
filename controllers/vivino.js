require('dotenv').config;
const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	const x = Xray();
	function cleanse(wines) {
		console.log(util.inspect(data, {depth: 4}));
		return data;
	}

	return new Promise((resolve, reject) => {
		x(process.env.VIVINO_URL, ['p.wine-name'], {
			wines: [
				{
					wine: 'a.link-muted'
				}
			]
		})((err, data) => {
			if (err) {
				reject(err);
			}

			console.log(data);
			// const list = cleanse(data);
			// resolve(list);
		});
	});
}
