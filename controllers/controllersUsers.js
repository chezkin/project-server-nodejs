const usersServis = require('../BL/usersBL');




function login(req, res) {
    usersServis.login(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err.message))

}

function sighnup(req, res) {
    console.log(req.body);
    usersServis.sighnup(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err.message))
}


module.exports = {
    login,
    sighnup,
};
