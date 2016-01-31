var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var UserSchema = new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}, { collection: 'ks_user' });

//add create_at and update_at plugin
UserSchema.plugin(timestamps);

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('ks_user',UserSchema);