import { outOfStockProducts } from './product-list-stock.js';

test('Testing products out of stock function', () => {
  expect(outOfStockProducts()).toBe([
    'Handcraft Chinese style',
    'Ladies Multicolored Dress',
    'printed high quality T shirts',
    'Sneakers Joggers Shoes',
    'Rhinestone Korean Style Open Rings',
    'Chain Pin Tassel Earrings',
  ]);
});
