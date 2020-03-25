const myCodeImmersivesObj = {
  objectify: 'me'
};

// Set the value of property `objectify` to be "yourself".
myCodeImmersivesObj.objectify = 'yourself'

// Add the new property `isAnExcellentObject` and set it to `true`.
myCodeImmersivesObj.isAnExcellentObject = 'true'

// Add the property `term` and set it to 1.
myCodeImmersivesObj.term = 1

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myCodeImmersivesObj.term += 1
console.log(myCodeImmersivesObj.term)

// Now add a new property called `currentScore` and set it to 3.
myCodeImmersivesObj.currentScore = 3

// Now add a new property called `cumulativeScore` and set it to 50.
myCodeImmersivesObj.cumulativeScore = 50

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myCodeImmersivesObj.cumulativeScore += myCodeImmersivesObj.currentScore
console.log(myCodeImmersivesObj.cumulativeScore)

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myCodeImmersivesObj['I am exactly this cool'] = 'soooooo cool'
// Now make a new EMPTY object that represents yourself.
const empty = {};

// Add a `firstName` property and set it to a string.
empty.firstName = 'Wilson'

// Add a `lastName` property and set it to a string.
empty.lastName = 'Chen'

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
empty.fullName = empty.firstName + empty.lastName

// Add an `age` property and set it to a number.
empty.age = 99

// Add an address property and set it to an empty array.
empty.address = []

// Now push three strings into that array.
empty.address.push('first string')
empty.address.push('second string')
empty.address.push('third string')


// Now make a new object, but this time we'll pre-populate it,
// not set it in any lines below it. In other words,
// the properties should be set the same way I initially set
// the `codeImmersivesObject` on line 1. It can be called
// whatever you want and can have whatever properties you want,
// as long as they include at least one string value, boolean
// value, number value, and array of numbers. As a stretch goal,
// pre-populate the object with at least one property using
// bracket notation as well. The important thing here is: this
// should all be done WITHIN the brackets of the object, NOT
// below the declaration of the object.
const newObj = {
  age: 10,
  tallerThan6Ft: false,
  occupation: 'programmer',
  randomNumber: [1,5,3,10],
  ['why are we doing this']: 'no idea',
};

console.log(newObj.age)

// As a further stretch goal, add a function that takes in a key name as a string and changes the corresponding value in the object you just made to be the string 'overwritten DYNAMICALLY'. Now call it with the name of one of your keys and see if it works! This will all take some research... Good luck!
const test = function(val){
  newObj.occupation = val
}
test('dentist')
