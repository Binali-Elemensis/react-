const user= require('../controllers/user');

module.exports = function(app) {
    app.post("/addUser", user.addUser);
};