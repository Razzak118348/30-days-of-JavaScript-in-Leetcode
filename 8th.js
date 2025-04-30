var compose = function(functions) {
    
    return function(x) {
        let xVal = x
        // iterate from the end of the array to the beginning
        // and apply each function to the current value of xVal
        // this way we can compose the functions in reverse order
        for(let i=functions.length-1;i>=0;i--){
            xVal=functions[i](xVal)
        }
        return xVal;
    }
};

console.log(compose([x=>x+1,x=>x*2])(4)) // 10
