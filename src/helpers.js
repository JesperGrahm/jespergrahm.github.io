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

function getCategory() {
    return window.location.pathname.split('/').at(-1)
}

function getVersion() {
    return window.location.pathname.split('/')[1]
}

export { getProductsInCategory, importAll, getProduct, getCategory, getVersion };