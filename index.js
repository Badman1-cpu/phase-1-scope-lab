var customerName = 'bob';

function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
      console.log(customerName);
    } else {
      console.log("Customer name is not a valid string.");
    }
  }
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
   bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'probley bob'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'sarah'
}