const mongoose = require("mongoose");

const addmemberSchema = new mongoose.Schema(
    {
        studentType:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        status:{
            type: String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        email:{
            type:String,
         },
        primaryPhone:{
            type:String
        },
        secondaryNumber:{
            type:String
        },
        address:{
            type:String,
        },
        country:{
            type:String,
        },
        state:{
            type:String,
        },
        zipPostalCode:{
            type:String
        },
        notes:{
            type:String
        },
        studentBeltSize:{
            type:String
        },
        program:{
            type:String        },
        startDate:{
            type:String,
        },
        expiredDate:{
            type:String,
        },
        lastPromotion:{
            type:String
        },
        location:{
            type:String
        },
        ID:{
            type:String
        },
        dan:{
            type:String
        },
        customId:{
            type:String,
        },
        leadsTracking:{
            type:String
        },
        staff:{
            type:String        },
        intrested:{
            type:String,
        },
        school:{
            type:String,
        },
        addToGroup:{
            type:String
        },
        familyName:{
            type:String
        },
        memberprofileImage:{
            type:String
        }
    }

);

module.exports = mongoose.model("member", addmemberSchema);
