const mdbconn = require('../lib/mongoUtils.js');

function getProducts() {
    return mdbconn.conn().then((client)=> {
        return client.db('usersdb').collection('productos').find({}).toArray();
    });
}

function deleteProduct(name) {
    return mdbconn.conn().then((client)=> {
        return client.db('usersdb').collection('productos').deleteOne({ Name: name });
    });
}

module.exports = [getProducts, deleteProduct];