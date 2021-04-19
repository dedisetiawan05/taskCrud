const mysqlConnection = require('../lib/connection')
module.exports = {
     index: function (req, res) {
            mysqlConnection.query(`SELECT * FROM team
                                   ORDER BY idTeam`, (err, rows) => {
            if (!err) {
                req.flash("error", err);
                res.render('../views/team/showTeam', { teams : rows })
            } else {
                res.render(err)
            }
        })
    },
    addTeam: function (req, res) {
    res.send("Form Tambah Team")
    },
    store:function (req, res) {
    res.send("Tambah Team")
    },
    updateTeam:function (req, res) {
    res.send("Form Update Team")
    },
    update:function (req, res) {
    res.send("Update Team")
    },
    delTeam: function (req, res) {
    res.send("Hapus Team")
}

}