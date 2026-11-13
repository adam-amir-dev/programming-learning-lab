const studentName = "Amir";
const age = 23;
const course = "Software Engineering";

const fees = 150000;
const paid = 100000;
const balance = fees - paid;

let registration = true;

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof course);
console.log(typeof fees);
console.log(typeof paid);
console.log(typeof balance);
console.log(typeof registration);

console.log(`
My name is ${studentName}.
I am ${age} years old.
I study ${course}.
My school fees are ₦${fees}.
I have paid ₦${paid}.
My remaining balance is ₦${balance}.
`);