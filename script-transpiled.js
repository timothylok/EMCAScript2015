'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Block = function Block(name, buildYear) {
    _classCallCheck(this, Block);

    this.name = name;
    this.buildYear = buildYear;
};

var Parks = function (_Block) {
    _inherits(Parks, _Block);

    function Parks(name, buildYear, noOfTrees, parkArea) {
        _classCallCheck(this, Parks);

        var _this = _possibleConstructorReturn(this, (Parks.__proto__ || Object.getPrototypeOf(Parks)).call(this, name, buildYear));

        _this.noOfTrees = noOfTrees;
        _this.parkArea = parkArea;
        return _this;
    }

    _createClass(Parks, [{
        key: 'print',
        value: function print() {
            return 'Park name: ' + this.name + ' Build Year: ' + this.buildYear;
        }
    }, {
        key: 'density',
        value: function density() {
            return parseInt(this.noOfTrees) / parseInt(this.parkArea);
        }
    }, {
        key: 'age',
        value: function age() {

            return new Date().getFullYear() - parseInt(this.buildYear);
        }
    }]);

    return Parks;
}(Block);

var Streets = function (_Block2) {
    _inherits(Streets, _Block2);

    function Streets(name, buildYear, length) {
        _classCallCheck(this, Streets);

        var _this2 = _possibleConstructorReturn(this, (Streets.__proto__ || Object.getPrototypeOf(Streets)).call(this, name, buildYear));

        _this2.length = length;
        return _this2;
    }

    return Streets;
}(Block);

var Town = function () {
    function Town() {
        _classCallCheck(this, Town);

        this.totalAge = -1;

        for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
            elements[_key] = arguments[_key];
        }

        this.elements = Array.from(elements);
        console.log(elements);
    }
    // 1. Tree density of each park in the town (formula: number of trees/park area)


    _createClass(Town, [{
        key: 'showTreeDensity',
        value: function showTreeDensity() {
            this.elements.forEach(function (cur) {
                return cur instanceof Parks ? console.log(cur.print() + ' Density: ' + cur.density()) : null;
            });
        }

        // 2. Average age of each town's park (formula: sum of all ages/number of parks)    

    }, {
        key: 'showAvgAgePark',
        value: function showAvgAgePark() {
            var totalAge = 0;
            var totalParks = 0;
            this.elements.forEach(function (val) {
                if (val instanceof Parks) {
                    totalAge += val.age();
                    totalParks++;
                    // console.log(totalAge);
                    // console.log(totalParks);
                }
            });
            console.log('Average age of each Park: ' + totalAge / totalParks + ' years');
        }

        // 3. The name of the park that has more than 1000 trees.
        // 4. Total and average length of the town's streets
        // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unkown, the default is normal

    }]);

    return Town;
}();

// 3 parks


var porter = new Parks('Porter', 1990, 2000, 10000);
var wills = new Parks('wills', 2000, 100, 3000);
var javius = new Parks('Javis', 2007, 456, 45678);

// 4 streets

var newSouthRd = new Streets('New South Road', 1890, 1000);
var newNorthRd = new Streets('New North Road', 1891, 2000);
var dominionRd = new Streets('Dominion Road', 1999, 3000);
var dukeStrt = new Streets('Duke Street', 2000, 4000);

var myTown = new Town(porter, wills, javius, newSouthRd, newNorthRd, dukeStrt);
myTown.showTreeDensity();
myTown.showAvgAgePark();
