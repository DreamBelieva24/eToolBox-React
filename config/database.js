console.log("got to database")

module.exports = {

    'dbUri' : process.env.MONGODB_URI || "mongodb://localhost/eToolBoxDB",
    "jwtSecret": "a secret phrase!!"

};