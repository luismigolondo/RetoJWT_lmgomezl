const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:1234@usuariosjwt.c3oer.mongodb.net/<dbname>?retryWrites=true&w=majority";

function MongoUtils() {
    const mu = {};
    mu.conn = () => {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        return client.connect();
    };
    return mu;
}
module.exports = MongoUtils()