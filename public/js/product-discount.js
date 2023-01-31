import { data } from './data.js';
export const productDiscount = () => {
    const productsWithDiscount = [];
    for (let i = 0; i < data.products.length; i++) {
        const priceWithDiscount = data.products[i].price -
            (100 - data.products[i].discountPercentage) / 100;
        let prodWithDiscount = {
            title: data.products[i].title,
            priceWithDiscount,
        };
        productsWithDiscount.push(prodWithDiscount);
    }
    return productsWithDiscount;
};
