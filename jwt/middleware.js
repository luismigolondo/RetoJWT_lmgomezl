let jwt = require('jsonwebtoken');
let config = require('./config.js');

let checkToken = (roles = []) => {
    //La funcion se cambio a esta forma para poder meterle mas parametros al middleware.
    if (typeof roles == 'string') {
        roles = [roles];
    }
    return function (req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token) {
            if (token.startsWith('Bearer')) {
                token = token.slice(7, token.length);
                jwt.verify(token, config.secret, (err, decoded) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: 'Token is not valid'
                        });
                    } else {
                        req.decoded = decoded;
                        //Si el request tiene rol y el rol no coincide con el que se ingresa por parametro en la ruta entonces
                        //El usuario no esta autorizado.
                        if (roles.length && !roles.includes(req.decoded.role)) {
                            return res.json({
                                success: false,
                                message: 'UNAUTHORIZED USER ROLE'
                            });
                        } else {
                            return next();
                        }
                    }
                });
            }
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }
};

module.exports = checkToken;