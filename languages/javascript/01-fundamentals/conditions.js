const studentName = "Amir";
const age = 23;
const jambScore = 190;

const hasOLevel = true;
const hasPaidScreening = true;
const isBlacklisted = false;

if (
    age >= 16 &&
    jambScore >= 180 &&
    hasOLevel &&
    hasPaidScreening &&
    !isBlacklisted
) {
    console.log(`${studentName} is eligible for admission`);
} else {
    console.log(`${studentName} is not eligible for admission`);
}