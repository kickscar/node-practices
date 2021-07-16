const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/user-api');

const router = express.Router();
router.route('/checkemail').get(controller.checkemail);

router.route('/needauth').get(authorized, function(res, req){
    res.send({
        result: "success"
    })    
});

module.exports = router;
