const router = require('express').Router();
const RealtorController = require('../controllers/realtorController');

router
.route('/create')
.post((req, res)=> RealtorController.create(req, res));




module.exports = router;