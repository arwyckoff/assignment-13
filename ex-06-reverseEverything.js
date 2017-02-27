// Ex-06 : reverseEverything()

// Write a function called reverseEverything(). It should take as input an array of
// objects, and it should output an array of objects with all of the keys and values
// reversed. It should also reverse the order of the array.

// var someList = [
//  { name: 'bae', okay: 'cool', pastTime: 'counting' },
//  { name: 'whoa', what: 'sureman', pastTime: 'eating'}
//  { name: 'alright', no: 'yes', pastTime: 'knitting' }
// ]

// reverseEverything(someList) => [
//   {alright: 'name', yes: 'no', knitting: 'pastTime'}
//   ...
//   {bae: 'name', no: 'yes', couting: 'pastTime' }
// ]

// Hint, you may want to use reverseObject() as a helper function.




//input: an array of objects
//output: an array of objects will all values and keys reversed and in reversed order


var reverseObject = function (object){
var newObject = {};

for(var prop in object) {
	if(object.hasOwnProperty(prop)){
		newObject[object[prop]] = prop;
	}
}
// 
// if(object.hasOwnProperty(prop)){
//   newObject[object[prop]] = prop;
return newObject
}


var reverseEverything = function (someList){
  var arrayReversed = []

  for(var i = someList.length - 1; i >= 0; i--){

      var reverse = someList[i]

      arrayReversed.push(reverseObject(reverse))


    	}
        return arrayReversed
    }










//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var usersList = [
   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" },
   { jimbo: 'coolguy@aol.com', hobby: 'dancing',  favoriteFood: "hotpockets" }
]
var flippedEverything = reverseEverything(usersList)

console.assert( flippedEverything[0]['coolguy@aol.com'] === 'jimbo' )
console.assert( flippedEverything[1].croissant === 'favoriteFood' )
console.assert( flippedEverything[1]['yeb@aol.com'] === 'yammer' )
console.assert( flippedEverything[2].dealmaking === 'hobby' )
