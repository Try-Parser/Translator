const translate = require('google-translate-api');
		 
module.exports = function(app, db) {
	app.post('/translate', (req, res) => {
		const test_data = 'Welcome';

		console.log(req.body)

		translate(test_data, {from: 'en', to: 'ja'}).then(gt => {
		    gt.source = test_data;
		    res.send(gt);
		}).catch(err => {
			res.send(err);
		    console.error(err);
		});
	})
};