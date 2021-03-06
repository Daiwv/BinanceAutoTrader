// lotSizeFilter expects a data node like this and a quantity
// "LOT_SIZE": {
//   "filterType": "LOT_SIZE",
//   "minQty": "0.01000000",
//   "maxQty": "100000.00000000",
//   "stepSize": "0.01000000"
// },

function lotSizeFilter(data, quantity) {
  if (quantity < Number(data.minQty)) {
    console.log('Too small of quantity');
    return false;
  } else if (Math.round(quantity % Number(data.stepSize)) !== 0) {
    console.log('Quantity does not match a legal step');
    return false;
  } else {
    return true;
  }
}

module.exports.lotSize = lotSizeFilter;
