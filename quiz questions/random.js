var subjects = ['maths','physics','chemistry','biology', 'history'];
var allQuestions = []
var n = 0
for (var subject of subjects){
  var questionsPath = `./${subject}.js`


  import(questionsPath).then((module) => {

    var questions = module.questions;
    

    for (var question of questions) {
      n+= 1
      allQuestions.push(question);
      console.log(n)

    }
  })

}
// put this within import
export var questions = allQuestions.sort(() => Math.random() - 0.5);

