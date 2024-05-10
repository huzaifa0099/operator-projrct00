const ageInput = prompt("Enter your age:");

// Convert input to an integer
const age = parseInt(ageInput);

// Check if the age is valid
if (!isNaN(age)) {
  // Valid age provided
  if (age < 18) {
    console.log("Hello, young one! You're still underage.");
  } else if (age >= 18 && age <= 30) {
    console.log("Hey there! You're in the prime of your life.");
  } else {
    console.log("Hello, wise one! You have experienced a lot in life.");
  }
} else {
  // Invalid age input
  console.log("Invalid age. Please enter a valid age.");
}
