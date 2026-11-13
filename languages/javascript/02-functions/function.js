function calculateBalance(total, paid) {
    return total - paid;
}

const balance = calculateBalance(150000, 100000);

console.log(balance); // 50000