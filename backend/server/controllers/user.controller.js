const User = require("../models/user.model")

module.exports.makeUser = (req, res) =>{
   
console.log(req)
        User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
 
}

module.exports.findAllUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => response.json(err))
}

