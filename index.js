var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Alice'; // Attempting to change the constant
}