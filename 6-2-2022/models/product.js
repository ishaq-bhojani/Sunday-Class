const { getConnect } = require("../db");
//const products = [];

class Product {
    constructor(title) {
        this.title = title;
    }

    async save() {
        const products = getConnect().db().collection("products");
        await products.insertOne({title: this.title});
    }

    static async fetchAll () {
        const products = [];
        const productsConnect = getConnect().db().collection("products");
        const productsCursor = await productsConnect.find({});
        await productsCursor.forEach( product => {
            console.log(product);
            products.push(product);
        });
        return products;
    }
}

module.exports = Product;