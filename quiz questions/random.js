var subjects = ["history","maths", "physics", "chemistry", "biology" ];
var allQuestions = [];
var leastQuestionsCount = Infinity;

var iteration = 1;
var n = 0

while (iteration <= 2) {
  console.log(">>>>>>>>>", iteration)

    
  for (var subject of subjects) {
    var questionsPath = `./${subject}.js`;

    // introducin a function within then() to access all values of subjects and not just the last value
    import(questionsPath).then(
      (function (subject, iteration) {
        return function (module) {
          var questions = module.questions;
          var questionsCount = questions.length;


          // gets least questions for freq blancing purpose
          if (questionsCount < leastQuestionsCount) {
            leastQuestionsCount = questionsCount;
            // console.log(leastQuestionsCount)
          }

          if(n == subjects.length -1){
            console.log("leastQuestionsCount = ", leastQuestionsCount)
            n = 0
          
          }
         
            console.log(questionsCount)

               // // last subject of the list/ end of loop active on iteration 1
          // if (iteration == 1 && subject == subjects.slice(-1)[0]) {
          //   // console.log(subject);
          // }
       

          // // last subject of the list/ end of loop active on iteration 1
          // if (iteration == 1 && subject == subjects.slice(-1)[0]) {
          //   // console.log(subject);
          // }
          
          // if (iteration == 2) {
          //   for (var question of questions.slice(0,leastQuestionsCount)) {
          //     allQuestions.push(question);
          //   }
          // }

          // if (subject == subjects.slice(-1)[0]) {
          //   console.log(">>> ", allQuestions.length);
          // }
          n+=1
         
        };
      })(subject, iteration)
    );


  }

  iteration += 1;
 
}

// put this within import
export var questions = allQuestions.sort(() => Math.random() - 0.5);
