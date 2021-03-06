var express = require('express');
var router = express.Router();
const dataTamu = require('../Model/tamu');
var nav = 1





/* GET home page. */
router.get('/', function (req, res, next) {

  dataTamu.find({}, {}, function (e, docs) {

    dataTamu.find({ konfirmasi: "hadir" }).count()
      .exec((err, responseHadir) => {
        
        dataTamu.find({ konfirmasi: "tidak_hadir" }).count()
          .exec((err, responseTidakHadir) => {

            res.render('list', {
              docs,
              responseHadir,
              responseTidakHadir,
              nav,
            });

          })

      })
  });

});


// Router delete
router.post('/postDelete', (req, res) => {

  dataTamu.deleteMany({
    _id: req.body.deleteCheck
  })
    .then(data => {
      res.redirect('/');
      res.status(200).json({
        status: 'SUCCESS',
        data
      })
    })
    .catch(err => {
      res.status(401).json({
        status: 'FAILED'
      })
    })


})

module.exports = router;
