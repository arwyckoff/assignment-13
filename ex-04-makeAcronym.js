// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'


//input: string


//output: string of first letters capitalized

var makeAcronym = function (newStringInput){
  // var acronymString = [];
  var wordArray = [];
  var letters = "";
  wordArray = newStringInput.split(" ")


    // console.log(wordArray)
    for(var j = 0; j < wordArray.length; j ++){
      word = wordArray[j]
      var firstLetter = (wordArray[j].charAt(0));
      var acronymString = [];
      letters = letters + wordArray[j].charAt(0);
      letters = letters.toUpperCase();



      // acronymString.push(firstLetter);
      //
      // acronymString.join('')
      // console.log(acronymString)
      // acronymString.join()
      // console.log(acronymString)

      // console.log(wordArray[0])
      // console.log(letters);



    }
    // wordArray.push(newStringInput.split(" "));
    // console.log(wordArray)


    // if(newStringInput[i] === newStringInput[i].toUpperCase() && newStringInput[i] !== " "){
    //   acronymString.push(newStringInput[i]);
    //   console.log(acronymString)

  return letters
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )

//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
