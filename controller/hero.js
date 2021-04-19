const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
        mysqlConnection.query(`SELECT hero.*, role.nameRole 
                               FROM hero
                               LEFT JOIN role ON hero.idRole = role.idRole
                               ORDER BY hero.idHero`, (err, rows) => {
            if (!err) {
                req.flash("error", err);
                res.render('../views/hero/showHero', { hero : rows })
            } else {
                res.render(err)
            }
        })
    },
    addHero: function (req, res) {
        mysqlConnection.query(`SELECT * FROM role`, (err, rows) => {
            if (!err) {
                res.render('../views/hero/formAddHero', { role : rows })
            } else {
                res.send(err)
            }
        })
    },
    store: function (req, res) {
        mysqlConnection.query(`INSERT INTO hero(nameHero, idRole, durability, offense, efekSkill, difficulty)
                              VALUES ('${req.body.nameHero}','${req.body.idRole}','${req.body.durability}','${req.body.offense}','${req.body.effekSkill}', '${req.body.difficulty}')`
                             ,(err) => {
                                 if (!err) {
                req.flash("success", "Hore Ada Hero Baru");
                res.redirect('/hero')
            } else {
                res.send(err)
            }
        })
    },
    updateHero: function (req, res) {
        let idHero = req.params.idHero
        mysqlConnection.query(`SELECT hero.*, role.nameRole 
                               FROM hero
                               LEFT JOIN role ON hero.idRole = role.idRole
                               WHERE hero.idHero = ${idHero}`, (err, rows) => {
            if (!err) {
                res.render('../views/hero/formUpdate', { hero : rows })
            } else {
                res.render(err)
            }
        })
    },
    update: function (req, res) {
        mysqlConnection.query(`UPDATE hero
                              SET nameHero = '${req.body.nameHero}',
                              idRole = '${req.body.idRole}',
                              durability = '${req.body.durability}',
                              offense = '${req.body.offense}',
                              efekSkill = '${req.body.effekSkill}',
                              difficulty = '${req.body.difficulty}'
                              WHERE hero.idHero = '${req.params.idHero}'`
                             ,(err) => {
            if (!err) {
                req.flash("success", "Hore, 1 Hero sudah diUpdate");
                res.redirect('/hero')
            } else {
                res.send(err)
            }
        })
    },
    delHero:function (req, res) {
         let idHero = req.params.idHero
        mysqlConnection.query(`DELETE FROM hero
                               WHERE hero.idHero = ${idHero}`, (err) => {
            if (!err) {
                req.flash("successDel", "Yah 1 Hero Terhapus");
                res.redirect('/hero')
            } else {
                res.render(err)
            }
        })
    } 
}