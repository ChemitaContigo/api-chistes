var mongoose = require('mongoose');
var chiste  = mongoose.model('chiste');

//GET - Return all tvshows in the DB
exports.findAllChistes = function(req, res) {
	chiste.find(function(err, chistes) {
    if(err) res.send(500, err.message);

    console.log('GET /chiste')
		res.status(200).jsonp(chistes);
	});
};