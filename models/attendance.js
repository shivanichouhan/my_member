const knex = require("./connection");


const insertData = (data) => {
    return knex('add_attandance').insert(data)
};

var selectData = () => {
    return knex.select("*")
        .from("add_attandance")
};

var updateData = (id, data) => {
    return knex('add_attandance')
        .where('id', '=', id)
        .update(data)
}

var deleteAttend = (id) => {
    return knex('add_attandance')
        .where('id', id)
        .del()
}

module.exports = { insertData, selectData, updateData,deleteAttend }
