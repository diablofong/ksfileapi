'use strict';

var User = require('./models/user'),
	hash = require('password-hash');

module.exports = {
	index: function(req, res) {
		res.status(200).send({
			'message': 'Hello! Welcome to Use ksfile api.'
		});
	},
	login: function(req, res) {
		var username = req.body.username,
			password = req.body.password;
		console.log('user:' + username);
		console.log('password:' + password);
		if (username && password) {
			var model = User.findOne({
				'name': username
			}).then(function(rs) {
				if (rs) {
					var verify = hash.verify(password, rs.password);
					if (verify) {
						res.status(200).send({
							'user': rs
						});
					};

				} else {
					res.status(404).send({
						'message': 'user is not exists.'
					});

				};
			});
		} else {
			res.status(404).send({
				'message': 'username and password can not be blank.'
			});
		};

	}
}