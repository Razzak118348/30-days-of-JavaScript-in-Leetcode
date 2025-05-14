function memoize(fn)
{
    const cache = new Map();  // cache রাখা হবে এখানে
  let callCount = 0;        // function কয়বার আসলে চলেছে, সেটা গুনবো

  const memoizedFn = (...args) => {
    const key = JSON.stringify(args); // input গুলোকে unique string বানিয়ে key বানানো হচ্ছে
console.log('key is', key)
    if (cache.has(key)) {
      console.log('cache hit in if condition')
      console.log('cache in if condition and the memorize value is  is ', cache.get(key))
      return cache.get(key); // আগের result থাকলে cache থেকে return
    }

console.log('all storage cache are', cache)
    const result = fn(...args); // নতুন হলে আসল function call
    cache.set(key, result);     // result cache করে রাখলাম
    callCount++;
    console.log("callCount is ",callCount)             // আসল function call হয়েছে, তাই বাড়ালাম
    return result;
  };

  // একটা method যোগ করলাম call count পাওয়ার জন্য
  memoizedFn.getCallCount = () => callCount;


  return memoizedFn;
}



let callCount = 0; // function কয়বার আসলে চলেছে, সেটা গুনবো
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    console.log('output',a+b)
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(4, 3) // 7
console.log(callCount) // 2
