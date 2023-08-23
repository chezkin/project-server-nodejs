const jsonfile = require('jsonfile');
const path = require('path');
const axios = require('axios');


async function readData() {
    const filePath = path.join(__dirname, 'dbProduct.json');
    const data = await jsonfile.readFile(filePath);
    return data;
}

async function writeData(_data) {
    const filePath = path.join(__dirname, 'dbProduct.json');
    await jsonfile.writeFile(filePath, _data, (err) => {
        if (err) throw err;
    });
    return 'The file has been saved!';
}

async function allProducts() {
    return readData();
}

async function getProductID(id) {
    const intID = Number(id);
    const db = await readData();
    const result = db.find((prod) => prod.id === intID);
    if (result) return result
}

async function creatProduct(product) {
    const db = await readData();
    const ifID = db.find((prod) => prod.id === product.id);
    if (ifID) throw new Error("error creating product: id is already");
    db.push(product);
    await writeData(db);
    return `Product id:${product.id} created`;
}


async function updateProductID(product) {
    const db = await readData();

    db.forEach((prod, index) => {
        if (prod.id === product.id) {
            db[index] = product;
        } 
    });
    await writeData(db);
    return `update Product id:${product.id} success`;
}

async function deleteProductID(id) {
    const intID = Number(id);
    const db = await readData();
    const result = db.filter((prod) => prod.id !== intID);
    await writeData(result);
    return `delete Product id:${intID}`
}

async function moreProductID(id) {
    const intID = Number(id);
    const db = await readData();
    const product = db.find((prod) => prod.id === intID);
    product.rating.count++;
    db.forEach(prod => {
        if (prod.id === intID) {
            prod = product
        }
    });
    await writeData(db);
    return `Product id:${intID} count is ${product.rating.count}`;
}

async function lessProductID(id) {
    const intID = Number(id);
    const db = await readData();
    const product = db.find((prod) => prod.id === intID);
    product.rating.count--;
    db.forEach(prod => {
        if (prod.id === intID) {
            prod = product
        }
    });
    await writeData(db);
    return `Product id:${intID} count is ${product.rating.count}`;
}

module.exports = {
    readData,
    allProducts,
    getProductID,
    creatProduct,
    updateProductID,
    deleteProductID,
    moreProductID,
    lessProductID,
}
