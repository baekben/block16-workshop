const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

let total = 0;
// if customer has subscription
// customer recieves 25% discount after refill total is calculated
function subDiscount(total) {
  let discount = total * 0.25;
  return total - discount;
}

// if customer has a coupon
// customer recieves $10 discount after subscription discount has been calculated
function coupon(discountTotal) {
  return discountTotal - 10;
}

// return and log string
// "Your grand total is 'final amount' "
function grandTotal(person) {
  // total before discounts
  total = person.refills * person.pricePerRefill;
  // check if person has a subscription
  if (person.subscription) {
    total = subDiscount(total);
  }
  // check if person has a coupon
  if (person.coupon) {
    total = coupon(total);
  }
  return `Your grand total is ${total}`;
}

grandTotal(timmy);
