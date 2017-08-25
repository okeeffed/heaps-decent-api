const Xray = require('x-ray');
const util = require('util');

exports.fetch = function() {
	const x = Xray();
	function cleanse(data) {
		data.beers.map(beer => {
			beer.abv = beer.abv.trim();
			beer.ibu = beer.ibu.trim();
			beer.checkins = beer.checkins.trim();
			beer.my_rating = beer.ratings[0];
			beer.global_rating = beer.ratings[1];
			beer.first_checkin = beer.dates[0];
			beer.last_checkin = beer.dates[1];
		});

		console.log(util.inspect(data, {depth: 4}));
		return data;
	}

	return new Promise((resolve, reject) => {
		x('https://untappd.com/user/okeeffe_d/beers', '.beer-item', {
			beers: [
				{
					beer: 'div.beer-details > p.name > a.track-click',
					brewery: 'div.beer-details > p.brewery > a.track-click',
					style: 'div.beer-details > p.style',
					ratings: ['div.beer-details > div.ratings > div.you > p'],
					abv: 'div.details > p.abv',
					ibu: 'div.details > p.ibu',
					dates: ['div.details > p.date > a > abbr'],
					checkins: 'div.details > p.check-ins'
				}
			]
		})((err, data) => {
			if (err) {
				reject(err);
			}

			const list = cleanse(data);
			resolve(list);
		});
	});
}
