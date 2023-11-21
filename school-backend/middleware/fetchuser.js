var jwt = require('jsonwebtoken');
let JWT_SECRET = "Harryisagoodb@oy"

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log('Received token:', token);
    if (!token) {
        res.status(401).send({ error: " heello Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);

        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error:  " yrrPlease authenticate using a valid token" })
        console.log(error)
    }

}


module.exports = fetchuser;



// const jwt = require('jsonwebtoken')
// let JWT_SECRET = "Harryisagoodb@oy"

// const fetchuser =(req,res,next)=>{
//     const token = req.header("auth-token")
//     if (!token) {
//         res.status(401).send({error: "Please authenticate using valid token"})
//     }
//     try {
//         const data = jwt.verify(token, JWT_SECRET)
//         req.user=data.user
//         next()
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using valid token" })

//     }
    
// }
// module.exports = fetchuser