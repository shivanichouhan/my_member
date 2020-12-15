const express = require("express");
const router = express.Router();

const { create,read,update,deleteadmin } = require("../controllers/admin")

router.post("/admin", create);
router.get("/admin/details",read)
router.put('/admin/:id',update)
router.delete('/admin/:id',deleteadmin)

module.exports = router