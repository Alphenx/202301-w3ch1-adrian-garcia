import { data } from './data.js';
export const ratingSortedProducts = () => {
    const sortedProducts = [];
    for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].rating > data.products[i - 1].rating) {
            sortedProducts.push(data.products[i].title);
        }
        else if (data.products[i].rating < data.products[i - 1].rating) {
            sortedProducts.unshift(data.products[i].title);
        }
    }
    return sortedProducts;
};
