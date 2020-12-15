const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const family_memSchema = new mongoose.Schema(
    {
        student_type: {
            type: String,
            required: true
        },
        relationship: {
            type: String,
            required: true
        },
        studentName: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Family_Member", family_memSchema);
