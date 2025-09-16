const a ={}
const b={key:'b'}
const c={key:'c'}

console.log(b);
a[b]=123;
//this means a["[object Object]"] = 123
a[c]=456;

a["[object Object]"] = 789;
// so all the value are overwritten
console.log("all the overwritten value is same",a[b],a[c]);