const products = [{name: 'computer mouse'}];
const product = products[0];

// truthy - values that resolve to true in a boolean context
// falsy - values that resolve to false in a boolean context
// flasy values = false, 0, ''/(empty string), null, undefined, NaN

if (product) {
   console.log('product found');
} else {
   console.log('product not found');
}
