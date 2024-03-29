// The Stages of JavaScript
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// Hint: use forEach

var pinfo = []

// Part B
princesses.forEach(function(p) {
  // The original array is mutated with forEach
  console.log(`${p.name}: ${p.age}`);
});

// Create an array of just the names from the princesses array
// Hint: use map
