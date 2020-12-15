const express = require("express");
const router = express.Router();

const { add_attand,read_attendance,update_stu_attend,delete_attendance} = require("../controllers/attendance")

router.post("/add_attendance", add_attand);
router.get("student_attendance",read_attendance)
router.put('/student/attendance/:id',update_stu_attend)
router.delete('/student/attendance/:id',delete_attendance)

module.exports = router