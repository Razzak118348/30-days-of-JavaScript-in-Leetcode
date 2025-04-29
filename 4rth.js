var createCounter = function(init) {
    const value = init;
    let count = value;
    return{
    increment:function(){
            return ++count;
        },
        decrement:function(){
            return --count;
        },
        reset:function(){
            return count = value;
        }
    }
};
console.log('hello')

const counter = createCounter(5)
console.log(counter);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 7
console.log(counter.decrement()); // 8
