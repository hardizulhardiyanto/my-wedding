var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tamuSchema = new Schema({
    nama: String,
    jmlKeluarga: String,
    alamat: String,
    konfirmasi: String,
    deskripsi: String,
})

module.exports = mongoose.model('tamuSchema',tamuSchema);
