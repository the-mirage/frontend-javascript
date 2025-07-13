function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
}
// Example usage:
var majorSubject1 = { credits: 4, brand: "major" };
var majorSubject2 = { credits: 3, brand: "major" };
var minorSubject1 = { credits: 2, brand: "minor" };
var minorSubject2 = { credits: 1, brand: "minor" };
var totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
var totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Major Credits:", totalMajorCredits.credits);
console.log("Total Minor Credits:", totalMinorCredits.credits);
