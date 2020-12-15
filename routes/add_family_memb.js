const express = require('express');
const router = express.Router();
const { Create,
    read,
    finance_Info,
    update,
    remove
      }= require("../controllers/add_family_memb")
const { requireSignin } = require('../controllers/auth');

router.get('/family_member/list/:userID',requireSignin,read )
router.get('/family_member/information/:userID/:family_membId',requireSignin,finance_Info)

router.post('/family_member/add/:userID',requireSignin,Create);

router.get('/family_member/deletemember/:userID/:family_membId',requireSignin,remove)

router.post('/family_member/updatemember/:userID/:family_membId',requireSignin,update)

module.exports = router