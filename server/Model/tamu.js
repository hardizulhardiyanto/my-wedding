var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tamuSchema = new Schema({
    nama: String,
    email: String,
    jmlKeluarga: String,
    alamat: String,
    deskripsi: String,
})

module.exports = mongoose.model('tamuSchema',tamuSchema);
