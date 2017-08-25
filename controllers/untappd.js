const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	var x = Xray();
	x('https://untappd.com/user/okeeffe_d/beers', '.beer-item', {
		beers: [
			{
				beer: 'div.beer-details > p.name > a.track-click',
				brewery: 'div.beer-details > p.brewery > a.track-click',
				style: 'div.beer-details > p.style',
				ratings: ['div.beer-details > div.ratings > div.you > p']
			}
		]
	})((err, beers) => {
		if (err) {
			console.log(err);
		}

		console.log(util.inspect(beers, {depth: 4}));

		return beers;
	});
}
