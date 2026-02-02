// Write a program to find the first non-repeating character.
function nonRepet(str2) {
    let str=str2.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  
}


  console.log(nonRepet("My name is rohan"));