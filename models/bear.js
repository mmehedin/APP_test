var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	String: {
        "$oid": String
    },
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);
