let product = {
  laptop: 45000,
  iphone: 67000,
  mobilecover: 1200,
  tablet: 58999,
};

let finalPrices = {};

for (let product in products) {
  finalPrices[product] = products[product] * 0.85; // 15% discount
}

console.log(finalPrices);