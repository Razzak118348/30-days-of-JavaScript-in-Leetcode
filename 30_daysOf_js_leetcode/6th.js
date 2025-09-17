var map = function(arr, fn) {
    let NewArr=[]
    for(let i=0;i<arr.length;i++){
      let val=  fn(arr[i],i)
      NewArr.push(val)
    }
    return NewArr;
};

console.log(map([1,2,3],function(n){
    return n+1
})) // [2,3,4]