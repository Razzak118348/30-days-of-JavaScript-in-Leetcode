/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr =[];   
    if(n==1) return arr=[0]
    if(n%2!=0){
        arr.push(0)
        for(let i=1;i<=Math.floor(n / 2);i++){
arr.push(i)
arr.push(-i)
        }
        return arr
    }
    if(n%2==0){
         for(let i=1;i<=Math.floor(n / 2);i++){
arr.push(i)
arr.push(-i)
        }
        return arr
    }
};

console.log(sumZero(5))