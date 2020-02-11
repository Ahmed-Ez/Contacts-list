const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({msg:'Not authorized'});

    try{
        const decoded = jwt.decode(token,process.env.JWT_SECRET);

        req.user=decoded.user;
        next();
    }catch(err){
        res.status(401).json({msg:'Not authorized'});
    }
};