const mysqlConnection = require('../lib/connection')
module.exports = {
     index: function (req, res) {
            mysqlConnection.query(`SELECT player.*, team.nameTeam FROM player LEFT JOIN team ON player.idTeam = team.idTeam
                                   ORDER BY player.idPlayer`, (err, rows) => {
                if (!err) {
                        
                            res.render('../views/player/showplayer', { players: rows })
                    } else {
                //res.render(err)
            }
        })
    },
    addplayer: function (req, res) {
    res.send("Form Tambah player")
    },
    store:function (req, res) {
    res.send("Tambah player")
    },
    updateplayer:function (req, res) {
    res.send("Form Update player")
    },
    update:function (req, res) {
    res.send("Update player")
    },
    delplayer: function (req, res) {
    res.send("Hapus player")
}

}