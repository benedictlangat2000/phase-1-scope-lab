// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  // Attempting to change the constant
  leastFavoriteCustomer = 'new value'; // This will throw an error
}
