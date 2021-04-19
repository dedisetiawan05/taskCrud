const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
    mysqlConnection.query(`SELECT * FROM role`, (err, rows) => {
            if (!err) {
                res.render('../views/role/showRole', { roles : rows })
            } else {
                res.send(err)
            }
        })
    },
    addRole:function (req, res) {
    res.send("Form Tambah Role")
    },
    store:function (req, res) {
    res.send("Tambah Role")
    },
    updateRole:function (req, res) {
    res.send("Form Update Role")
    },
    update:function (req, res) {
    res.send("Update Role")
    },
    delRole:function (req, res) {
    res.send("Hapus")
    }

}