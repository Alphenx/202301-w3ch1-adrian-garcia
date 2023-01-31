// Función que reciba la lista de productos y devuelva los productos sin stock
import { data } from './data.js';
export const outOfStockProducts = () => {
    const outOfStock = [];
    for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].stock <= 10) {
            outOfStock.push(data.products[i].title);
        }
    }
    return outOfStock;
};
