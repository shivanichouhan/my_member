const manage_rank = require("../models/program_rank");
const user = require("../models/user")
// var s = require("../uploads")


exports.create = (req, res) => {
    const prog = new manage_rank(req.body)
    prog.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };
        if(req.file){
        const cloudenary = require("cloudinary").v2
        cloudenary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.cloud_api_key,
            api_secret: process.env.cloud_api_secret
        });
        console.log(req.file)
        const path = req.file.path
        const uniqueFilename = new Date().toISOString()
        cloudenary.uploader.upload(
            path,
            { public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
            function (err, image) {
                if (err) return res.send(err)
                console.log('file uploaded to Cloudinary')
                const fs = require('fs')
                fs.unlinkSync(path)
                manage_rank.findByIdAndUpdate(data._id, { $set: { rank_image: image.url } })
                    .then((response) => {
                        res.json("data and logo Added")
                    });
            }
        );}
        else{
            res.send("data added")
        }
    });


};


exports.read = (req, res) => {
    // const uid = req.body.uid;
    manage_rank.find()
        .then((category) => {
            res.json(category)
        }).catch((err) => {
            console.log(err);
            res.send(err)
        })
};

exports.program_Info = async (req, res) => {
    const id = req.params.proId
    manage_rank.findById(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.send(err)
        });
};
exports.update = (req, res) => {
    const uid = req.params.proId;
    manage_rank.updateOne({ _id: uid }, req.body)
        .then((result) => {
            if (req.file) {
                const cloudenary = require("cloudinary").v2
                cloudenary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.cloud_api_key,
                    api_secret: process.env.cloud_api_secret
                });
                const path = req.file.path
                const uniqueFilename = new Date().toISOString()
                cloudenary.uploader.upload(
                    path,
                    { public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
                    function (err, image) {
                        if (err) return res.send(err)
                        console.log('file uploaded to Cloudinary')
                        const fs = require('fs')
                        fs.unlinkSync(path)
                        manage_rank.findByIdAndUpdate(uid, { $set: { rank_image: image.url } })
                            .then((response) => {
                                res.json(response)
                            });
                    }
                );
            } else {
                res.send(result);
                console.log(result);
            }
            // res.send(result);
            // console.log(result);
        }).catch((err) => {
            console.log(err);
            res.send(err);
        })
}


exports.remove = (req, res) => {
    const uid = req.params.proId;
    manage_rank.remove({ _id: uid })
        .then((resp) => {
            console.log(resp);
            res.json({ data: resp, message: "program deleted succesfuly" });
        }).catch((err) => {
            res.send(err)
        })
};




//image kid id
//21tx44do9br
//cloudeny API ky 914449541412924
// API SECRET - ZEHWWVyB7gf4Gj5FPuWPucmAtZU
// envoronmnt variable - CLOUDINARY_URL=cloudinary://914449541412924:ZEHWWVyB7gf4Gj5FPuWPucmAtZU@sveltose-com
// cloud name -sveltose-com