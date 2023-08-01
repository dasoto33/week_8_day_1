// Enjoying your holiday, you head out on a scuba diving trip!
// Disaster!! The boat has caught fire!!
// You will be provided a string that lists many boat related items. 
// If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". 
// Then return the string.

// [input, expected]
// [
//     "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast",
//     "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
// ],
// [
//     "Mast Deck Engine Water Fire",
//     "Mast Deck Engine Water ~~"
// ],
// [
//     "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain",
//     "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
// ],

// take in each word of string, check to see if it === fire
// replace fire with ~~

function boatFire(items) {

    const split = items.split(' ').map(word => { // O(n) + O(n)
        if (word === 'Fire') // O(1)
        return '~~' // O(1)
        else return word // O(1)
    
    })
return(split.join(' ')) // O(n)
}

// O(n) linear time complexity 

console.log(boatFire("Mast Deck Engine Water Fire"))
console.log(boatFire("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"))


// Solution 2:

const putOutFire = astring => astring.replace(/Fire/g, '~~')
