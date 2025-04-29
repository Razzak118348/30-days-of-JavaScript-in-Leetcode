/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
      toBe:function (value){
       return (val===value)? {"value":true}:{"error":"Not Equal"}
      },
      notToBe: function(value){
       return (val!==value)? {"value":true}:{"error":"Not Equal"}
      }

    }
};


  expect(5).toBe(5); // true
  expect(5).notToBe(5); // throws "Equal"
