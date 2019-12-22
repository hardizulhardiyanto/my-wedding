var express = require('express');
var router = express.Router();
const dataTamu = require('../Model/tamu');

router.post('/', function (req, res) {
    let { nama,
        jmlKeluarga,
        alamat,
        konfirmasi,
        deskripsi } = req.body;

    try {
        const newAddTamu = new dataTamu({
            nama,
            jmlKeluarga,
            alamat,
            konfirmasi,
            deskripsi

        });
        newAddTamu.save().then(dataCreated => {
            res.status(200).json({ status: 'success', data: dataCreated })
        })
    } catch (error) {
        res.status(400).json({ status: 'failed', error })
    }

})

router.get('/', (req, res) => {
    dataTamu.find()
    .exec((err, response) => {
        if (err) {
            res.status(400).json({ status: 'failed', error: err });
        }else{
            dataTamu.find( { konfirmasi: "hadir" } ).count()
            .exec((err, responseHadir) => {

                res.status(200).json({ status:'success', data: response, dataHadir:responseHadir })

            })
            
        }
    })
})

module.exports = router;
