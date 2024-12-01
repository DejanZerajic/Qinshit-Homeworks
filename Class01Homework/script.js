let unitPrice = 119.95;  //price per phone unit
let lotNumber = 30; //number of phones in a lot
let pretaxlotPrice = unitPrice * lotNumber; //pre-VAT price per lot of 30 units
console.log (pretaxlotPrice); //display pre-VAT price in console
let taxAdded = 0.5; // 5% VAT
let taxVATperLot = pretaxlotPrice * taxAdded; // calculating tax per lot 
console.log (taxVATperLot); // display VAT for the lot
let totalLotPrice = pretaxlotPrice + taxVATperLot; //calculating after tax price per lot
console.log (totalLotPrice); //display after tax price per lot