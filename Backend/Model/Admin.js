const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name:String,
    email:String,
    Password:String
});

module.exports = mongoose.model("Admin",AdminSchema);