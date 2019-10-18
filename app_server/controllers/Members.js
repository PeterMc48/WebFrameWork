/* GET 'home' page */
const logIn = function(req, res){
    /* GET 'Sign In' page */
    res.render('logIn', { title: 'Log In' });
};
    /* GET 'Register' page */
const register = function(req, res){
    res.render('register', { title: 'Register' });
};
    
module.exports = {
    logIn,
    register
};
    