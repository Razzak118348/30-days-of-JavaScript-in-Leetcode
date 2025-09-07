/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {

    if (typeof classFunction !== "function") return false;

    if (obj === null || obj === undefined) return false;


    obj = Object(obj);
    console.log("object in check function",obj)


    while (obj) {
        if (Object.getPrototypeOf(obj) === classFunction.prototype) {
            return true;
        }
        obj = Object.getPrototypeOf(obj);
    }

    return false;
};

console.log(checkIfInstanceOf(new Date(), Date));
// true

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));
// true

console.log(checkIfInstanceOf(Date, Date));
// false

console.log(checkIfInstanceOf(5, Number));
// true
