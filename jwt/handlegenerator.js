let jwt = require('jsonwebtoken');
let config = require('./config.js');
var [getUsers, getUser] = require('./controller/user');
let fetch = require("node-fetch");
let md5 = require('md5');

class HandleGenerator {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        fetch("http://localhost:3000/users/" + username).then(res => res.json()).then(user => {
            if (username && password) {
                if (username == user.username && md5(password) == user.password) {
                    let token = jwt.sign({
                        username: username,
                        password: md5(password),
                        role: user.role
                    }, config.secret, {
                        expiresIn: '24h'
                    });
                    res.json({
                        success: true,
                        message: 'Authentication succesful!',
                        token: token
                    });
                } else {
                    res.send(403).json({
                        success: false,
                        message: 'Incorrect username or password'
                    });
                }
            } else {
                res.send(400).json({
                    success: false,
                    message: 'Authentication failed! Please check the request'
                });
            }
        });
    }

    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }

}

module.exports = HandleGenerator;