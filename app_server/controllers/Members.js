/* GET 'home' page */
const signIn = function(req, res){
    /* GET 'Sign In' page */
    res.render('signIn', { title: 'Sign In' });
    };
    /* GET 'Register' page */
    const register = function(req, res){
    res.render('register', { title: 'Register' });
    };
    
    module.exports = {
    signIn,
    register
    };
    