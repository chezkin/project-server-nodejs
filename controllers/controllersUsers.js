const usersServis = require('../BL/usersBL');


module.exports = {

    login : (req, res) => {
        const objLogin = usersServis.login();
        res.status(200).json(objLogin);
    },
    sighnup : (req, res) => {
        const objSighnup = usersServis.sighnup();
        res.status(200).json(objSighnup);
    },
};
