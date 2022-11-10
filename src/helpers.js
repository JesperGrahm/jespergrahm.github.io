import { products } from './database'

function getProductsInCategory(category) {
    var productsInCategory = [];
    products.map(product => {
        if (product.category == category) {
            productsInCategory.push(product)
        }
    })
    return productsInCategory;
}

function getProduct(id) {
    var result;
    products.map(product => {
        if (product.id == id) {
            result = product
        }
    })
    return result;
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

export { getProductsInCategory, importAll, getProduct };