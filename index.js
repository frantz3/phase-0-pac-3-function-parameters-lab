
function introduction(name) {
   return `Hi, my name is ${name}.`;
}
console.log(introduction("Frantz"));



function introductionWithLanguage(name, language) {
   return console.log(`Hi, my name is ${name}. and I am learning to program in ${language}`);

}

introductionWithLanguage(`Frantz`, `Javascript`);

function introductionWithLanguageOptional(name, language = "Javascript") {
  return console.log(`Hi, my name is ${name}. and I am learning to program in ${language}`);

}





