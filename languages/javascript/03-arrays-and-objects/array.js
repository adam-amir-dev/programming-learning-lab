
const prices = [100, 250, 80, 400, 150, 50];

let high = prices[0]
let newArray = [];

for(let i = 0; 1<prices.length; i++){

    if( prices[i]>high ){
       high = newArray.push(prices[i])
        
    }

}
console.log(high.length)

const scores = [10, 20, 30];
let total = 0;

for (let i = 0; i < scores.length; i++) {
    
    total = total + scores[i];
}

console.log(total);