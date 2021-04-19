const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
        //query untuk team
            mysqlConnection.query(`SELECT meet.*, team.nameTeam FROM meet
                               LEFT JOIN team ON meet.idTeamHome = team.idTeam
                                   ORDER BY meet.idMeet`, (err, teamHome) => {
            if (!err) {
                //console.log(teamHome);
                home = teamHome;
                mysqlConnection.query(`SELECT meet.*, team.nameTeam FROM meet
                                    LEFT JOIN team ON meet.idTeamAway = team.idTeam
                                        ORDER BY meet.idMeet`, (err, teamAway) => {
                    if (!err) {
                        console.log(teamAway);
                        console.log(teamHome);
                            res.render('../views/meet/showMeet', { home : teamHome, teamAway : teamAway })
                    } else {
                        return err
                    }
                });
            } else {
                return err
            }
        });
    },
    addMeet: function (req, res) {
    res.send("Form Add Pertandingan")
    },
    store:function (req, res) {
    res.send("Add Pertandingan")
    },
    updateMeet:function (req, res) {
    res.send("Form Update Pertandingan")
    },
    update: function (req, res) {
    res.send("Update Pertandingan")
    },
    delMeet:function (req, res) {
    res.send("Delete Pertandingan")
    }
    
}