const jsonfile = require('jsonfile');
const path = require('path');

const bcrypt = require('bcrypt');



async function readUsers() {
    const filePath = path.join(__dirname, 'dbUsers.json');
    const data = await jsonfile.readFile(filePath);
    return data;
}

async function writeUsers(_data) {
    const filePath = path.join(__dirname, 'dbUsers.json');
    await jsonfile.writeFile(filePath, _data, (err) => {
        if (err) throw new Error(`Error: data not writing ${err}`);
    });
    return 'The file has been saved!';
}

async function getAllUsers() {
    const data = await readUsers();
    return data.users;
}
async function login(body) {
    const db = await readUsers()
    for (const user of db.users) {
        if (user.email === body.email) {
            if (bcrypt.compareSync(body.password, user.password)) {
                return({
                    "message": "user already logged in",
                    "id": user.id
                })
            }
        }
    }
    throw new Error('login failed');
}
async function createUser(body) {
    const db = await readUsers()
    for (const user of db.users) {
        if (user.email === body.email) {
            throw new Error('Email is not uniq')
        }
    }

    db.users.push(body);
    await writeUsers(db);
    return `The user ${body.email} has been created!`;
}


module.exports = {
    readUsers,
    getAllUsers,
    createUser,
    login,

}