const knex = require("./connection");


const insertData = (data) => {
    return knex('admin').insert(data)
};

var selectDatas = () => {
    return knex.select("*")
        .from("admin")
};

var updateData = (id, data) => {
    return knex('admin')
        .where('id', '=', id)
        .update(data)
}

var deleteAttend = (id) => {
    return knex('admin')
        .where('id', id)
        .del()
}

module.exports = { insertData, selectDatas, updateData,deleteAttend }
