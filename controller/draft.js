const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
        mysqlConnection.query(`SELECT draftpick.*,meet.dateDraft, hero.nameHero, player.nickName, team.nameTeam FROM draftpick
                              LEFT JOIN hero ON draftpick.idHero = hero.idhero
                              LEFT JOIN player ON draftpick.idPlayer = player.idPlayer
                              LEFT JOIN team ON draftpick.idTeam = team.idTeam
                              LEFT JOIN meet ON draftpick.idMeet = meet.idMeet
                              ORDER BY draftpick.idDraft`, (err, rows) => {
                if (!err) {
                            res.render('../views/draft/showDraft', { drafts: rows })
                    } else {
                console.log(err);
            }
        })
    }
    
}