/*
// ES6 arrow functions
var friends = ['Bob', 'Jane', 'Mark'];

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = (friends) => {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    
    console.log(arr);
}

new Person('John').myFriends6(friends);

// Leture: Arrays

const boxes = document.querySelector('.box');

// ES5
//var boexsArr5 = Array.prototype.slice.all(boxes);

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this. yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this. yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this. yearOfBirth;
        console.log(age);
    }
}

const john6 = new Person6('John', 1990, 'teacher');
*/

/* 
    Coding chanllenge
    Suppose that your're working in a small town adminstration, and you're in charge of two town elements;
    
    1. Parks
    2. Streets
    
    It's a very small town, so right now there are only 3 parsk and 4 streets. All parks and streets have a name and a build year.
    
    At an end-of-year meeting, your boss wants a final report with the following;
    1. Tree density of each park in the town (formula: number of trees/park area)
    2. Average age of each town's park (formula: sum of all ages/number of parks)
    3. The name of the park that has more than 1000 trees.
    4. Total and average length of the town's streets
    5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unkown, the default is normal
*/

class Block {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Block {
    constructor (name, buildYear, noOfTrees, parkArea) {
        super(name, buildYear);
        this.noOfTrees = noOfTrees;
        this.parkArea = parkArea;
    }
    print() {
        return `Park name: ${this.name} Build Year: ${this.buildYear}`;
    }
    density () {
        return (parseInt(this.noOfTrees) / parseInt(this.parkArea));
    }
    age() {

        return (new Date().getFullYear() - parseInt(this.buildYear));
    }
}

class Streets extends Block {
    constructor (name, buildYear, length) {
        super(name, buildYear);

        this.length = length;
    }
}

class Town  {

    constructor (...elements) {
        this.totalAge = -1;
        this.elements = Array.from(elements);
        console.log(elements);
    }
    // 1. Tree density of each park in the town (formula: number of trees/park area)
    showTreeDensity() {
        this.elements.forEach(cur => cur instanceof Parks ? console.log(cur.print() + ' Density: ' + cur.density()): null);
      
    }
    
    // 2. Average age of each town's park (formula: sum of all ages/number of parks)    
    showAvgAgePark() {
        let totalAge = 0;
        let totalParks = 0;
        this.elements.forEach(function (val) {
            if (val instanceof Parks) {
                totalAge += val.age();
                totalParks ++;
                // console.log(totalAge);
                // console.log(totalParks);
            }
             
        });
       console.log('Average age of each Park: ' + totalAge / totalParks + ' years');
    }

    // 3. The name of the park that has more than 1000 trees.
    // 4. Total and average length of the town's streets
    // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unkown, the default is normal
}

// 3 parks
var porter = new Parks('Porter', 1990, 2000, 10000);
var wills = new Parks('wills', 2000, 100, 3000);
var javius = new Parks('Javis', 2007, 456, 45678);

// 4 streets

var newSouthRd = new Streets('New South Road', 1890, 1000);
var newNorthRd = new Streets('New North Road', 1891, 2000);
var dominionRd = new Streets('Dominion Road', 1999, 3000);
var dukeStrt = new Streets('Duke Street', 2000, 4000);

const myTown = new Town( porter, wills, javius, newSouthRd, newNorthRd, dukeStrt);
myTown.showTreeDensity();
myTown.showAvgAgePark();