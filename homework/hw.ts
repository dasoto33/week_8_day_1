// Question #1

// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values 

// use same details from the students and declare their types
// pet is not included in student2 so make it optional (use ?)

type CTStudent = {
    id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

let student11: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student22: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student33: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

console.log(student11)
console.log(student22)
console.log(student33)


// Question #2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If there is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function


type Fruit = {
  color: string,
  shape: string
}

let apple: Fruit = {color: "red", shape: "sphere"}
let eaten: Fruit | null = null

// check to see if fruit is null or not
// if it is not, display the above statement (use ${}) to call the color
// if it is null, display the alreay statement

function fruitColor(fruit : Fruit | null) : void {
    if (fruit !== null) {
        console.log(`The color of the fruit is ${fruit.color}`)
    } else {
        console.log("You ate my fruit already")
    }
}

console.log(fruitColor(apple))
console.log(fruitColor(eaten))


// Question #3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type

// use " | " as "or" or to create a union type

type Book = {
  isbn:string,
  title:string,
  author:string
}

type DigitalBook = {
  fileType:string,
}

type Ebook = Book | DigitalBook

const newBook: Ebook = {
    author: "Stephen King",
    fileType: 'Paperback'
}

console.table(newBook)


// Question #4

// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type

// make color optional with ?
// keywords should be a list of strings (string[])
// could not figure out how to use enum for categories

type ShopItem = {
    id: number,
    price: number,
    description: string,
    color?: string,
    category: string,
    keywords: string[]
}

let item1 : ShopItem = {
    id: 333,
    price: 180,
    description: "Air Jordan 5 Retro",
    color: "beige",
    category: "shoes",
    keywords: ["Streetwear", "Basketball", "Casual"]
}
let item2 : ShopItem = {
    id: 444,
    price: 15,
    description: "Orange Shorts",
    color: "orange",
    category: "pants",
    keywords: ["Seasonal", "Party", "Casual"]
}
let item3 : ShopItem = {
    id: 777,
    price: 30,
    description: "Bucket Hat",
    category: "hats",
    keywords: ["Headwear", "Comfort", "Outdoor"]
}

console.log(item1)
console.log(item2)
console.log(item3)