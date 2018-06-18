const translate = require('google-translate-api');
		 
module.exports = function(app, db) {
	app.post('/translate', (req, res) => {
		const test_data = 'Welcome';

		console.log(req.body.message)

		translate(req.body.message, {from: 'ja', to: 'en'}).then(gt => {
		    gt.source = req.body.message;
		    res.send(gt);
		}).catch(err => {
			res.send(err);
		    console.error(err);
		});
	})
};