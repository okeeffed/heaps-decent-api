require('dotenv').config;
const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	const x = Xray();

	function cleanse(data) {
		data.repos.map((repo, index) => {
			data[index].owner = repo.owner.split(' ')[0];
		});

		console.log(util.inspect(data, {depth: 4}));
		return data;
	}

	return new Promise((resolve, reject) => {
		x(process.env.GITHUB_URL, '.repo-list', {
			repos: x('li', [{
				link: 'div > h3 > a@href',
				name: 'div > h3 > a'
			}])
		})((err, data) => {
			if (err) {
				reject(err);
			}

			data.repos.map(repo => {
				repo.name = repo.name.trim();
			})
			console.log(util.inspect(data, {depth: 4}));

			// const list = cleanse(data);
			resolve(data);
		});
	});
}
