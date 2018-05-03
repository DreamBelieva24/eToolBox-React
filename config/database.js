console.log("got to database")

module.exports = {

    'url' : process.env.MONGODB_URI || "mongodb://localhost/eToolBoxDB"

};