const express = require("express");
const router = express.Router();
const finance_info  = require("../controllers/finance_info")
const { requireSignin, isAuth } = require("../controllers/auth");
var bodyParser=require('body-parser')
const parser = bodyParser.urlencoded({
    extended: false
});

router.post("/finance_info/:user_id",parser,requireSignin,finance_info.Create);
router.get("/finance/list_of_finance/:user_id",parser,requireSignin,finance_info.read);
router.get("/finance/finance_info/:user_id/:financeId",parser,requireSignin,finance_info.finance_Info)
router.post("/finance/update_financeinfo/:user_id/:financeId",parser,requireSignin,finance_info.update);
router.get("/finance/delete_financeinfo/:user_id/:financeId",parser,requireSignin,finance_info.remove);

module.exports = router;
