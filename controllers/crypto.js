const BitcoinMag 	= require('./bitcoinMagazine');
const Coindesk 		= require('./coindesk');

async function fetch() {
	// return new Promise((resolve, reject) => {
		try {
			const coindesk = await Coindesk.fetch();
			const bitcoinMag = await BitcoinMag.fetch();

			return {
				coindesk,
				bitcoinMag
			};
		} catch(err) {
			console.log(err);
		}
	// });
}

module.exports = {
	fetch
}
