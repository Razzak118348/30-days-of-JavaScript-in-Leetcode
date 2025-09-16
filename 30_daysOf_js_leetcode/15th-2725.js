var cancellable = function(fn, args, t) {
  const result = [];
  const start = Date.now();

  // immediate execution
  result.push({ time: 0, returned: fn(...args) });

  // interval execution
  const intervalId = setInterval(() => {
    const time = Date.now() - start;
    result.push({ time, returned: fn(...args) });
  }, t);

  // cancel function
  return function cancelFn() {
    clearInterval(intervalId);
    console.log(result);
  };
};

const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);
