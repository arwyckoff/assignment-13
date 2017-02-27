/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/

//input: an array

var getLast = function (array){
  var lastPosition = array.length - 1;
  // console.log(array.length)
  // console.log(array[lastPosition])
    return array[lastPosition];
}

//output: last element of array


console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )
