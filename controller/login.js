const bcrypt = require('bcryptjs')
const mysqlConnection = require('../lib/connection')
module.exports = {
    index: function (req, res) {
      res.redirect("/app")  
    },
    validasi: function (req, res) {
        
            let { email, password } = req.body
            mysqlConnection.query(`SELECT * FROM admin WHERE email = '${email}'`, (error, result) => {
                if (error) {
                    console.log(error)
                }
                console.log(`password sebelum di hash ${password}`);
                if (result.length == 0) {
                    req.flash("error", "email tidak terdaftar");
                    console.log("email tidak terdaftar");
                    res.redirect('/login')
                } else if (!(bcrypt.compareSync(password,result[0].password)) ) {
                        req.flash("error", "password salah");
                        console.log("password salah");
                        res.redirect('/login')
                } else {
                    req.flash("success", "Selamat Datang di Aplikasi DraftPick");
                    console.log("Berhasil");
                    res.redirect('/hero')
                }
            })
    },
    login: function (req, res, next) {
        let isAdmin = true;
        if (isAdmin == true) {
            res.render("../views/login/login")
            next()
        } else {
            res.send("Gagal Login");
        }
    },
    register: function (req, res) {
        res.render("../views/login/register")
    },
    prosesRegister: function (req, res) {
        let { name, email, password, passwordConfirm } = req.body
        mysqlConnection.query(`SELECT * FROM admin WHERE email = '${email}'`, (err, result) => {
            console.log(result.length);
            if (err) {
                console.log(err);
            }
            console.log(email);
            if (result.length > 0) {
                req.flash("error", "Email Sudah digunakan");
                console.log("Email Sudah digunakan");
                res.redirect('/register')
            } else if (password !== passwordConfirm) {
                 req.flash("error", "Password Tidak Sama");
                console.log("Password Tidak Sama");
                res.redirect('/register')
            } else {
                password = bcrypt.hashSync(password, 8)
                mysqlConnection.query(`INSERT INTO admin SET ?`, { nameAdmin: name, email: email, password: password }, (err, result) => {
                    if (!err) {
                        req.flash("success", "Selamat Kamu Sudah Terdaftar");
                        res.redirect('/login')
                        //console.log(result);
                    } else {
                        res.send(err)
                    }
                })
            }
        })
    }
}