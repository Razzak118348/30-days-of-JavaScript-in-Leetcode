
var runningSum = function(nums) {
    const result=[];
    let sum=0;
    for (let num of nums){
        sum+=num;
        result.push(sum);
    }
    return result;
};

const sum=runningSum([1,2,3,4])
console.log(sum)