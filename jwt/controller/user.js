const mdbconn = require('../lib/mongoUtils.js');

function getUsers() {
    return mdbconn.conn().then((client)=> {
        return client.db('usersdb').collection('users').find({}).toArray();
    });
}

function getUser(username) {
    return mdbconn.conn().then((client)=> {
        return client.db('usersdb').collection('users').findOne({ username: username });
    });
}

module.exports = [getUsers, getUser];