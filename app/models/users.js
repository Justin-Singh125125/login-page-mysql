var Sequelize = require("sequelize");
var sequelize = require("../config/connection");


var Account = sequelize.define("account", {
    username: Sequelize.STRING,
    password: Sequelize.INTEGER
});


var SignedIn = sequelize.define("signIn", {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING
})


Account.sync();
SignedIn.sync();
module.exports = {
    Account,
    SignedIn
}


