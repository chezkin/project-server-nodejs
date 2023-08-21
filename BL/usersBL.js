const usersDL = require('../DL/usersDL');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const saltRounds = 10;


function login(body) {
    const result = usersDL.login(body);
    return result;
}

function sighnup(body, res) {
    if (!emailval(body.email)) {
        throw new Error('Email validation');
    }
    if (!passwordval(body.password)) {
        throw new Error('password validation');
    }
    const myPlaintextPassword = body.password;
    const myHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    body.password = myHash;
    const uuid = uuidv4();
    body.id = uuid;

    return usersDL.createUser(body);
}

module.exports = {
    login,
    sighnup,
};

const validator = require("email-validator");

const passwordValidator = require('password-validator');
const schema = new passwordValidator();
schema
    .is().min(6)                                    // Minimum length 8
    .is().max(10)                                  // Maximum length 100
// .has().uppercase()                              // Must have uppercase letters
// .has().lowercase()                              // Must have lowercase letters
// .has().digits(2)                                // Must have at least 2 digits
// .has().not().spaces()                           // Should not have spaces
// .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

function emailval(email) {
    return validator.validate(email);
}

function passwordval(password) {
    return schema.validate(password);
}



