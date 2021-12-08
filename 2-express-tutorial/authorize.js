const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'fethi') {
        req.user = { name:'fethi', id:3 };
        next();
    }
    else{
        res.status(401).send('Not Authorized');
    }
};

module.exports = authorize;