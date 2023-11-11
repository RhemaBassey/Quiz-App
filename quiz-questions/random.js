var subjects = ["maths", "physics", "chemistry", "biology", "history"];
var questions = [];
var leastQuestionsCount = Infinity;
var uncutQuestions = [];

async function loadQuestions() {
  for (var subject of subjects) {
    var questionsPath = `./${subject}.js`;

    let module = await import(questionsPath);
    var moduleQuestions = module.questions;
    var questionsCount = moduleQuestions.length;

    // gets the subject with the least amount of questions
    if (questionsCount < leastQuestionsCount) {
      leastQuestionsCount = questionsCount;
    }

    uncutQuestions.push(moduleQuestions);
  }

  for (var uncutSubjectQuestions of uncutQuestions) {
    // the purpose of cutting my questions to the same amount of subjects with the least questions,
    // is so that subjects with a lot of questions are not typically over-represented,
    // and questions with least questions aren't typically under-represented when randomly selected.
    var cutSubjectQuestions = uncutSubjectQuestions.slice(
      0,
      leastQuestionsCount
    );
    for (var subjectQuestion of cutSubjectQuestions) {
      questions.push(subjectQuestion);
    }
  }

  return questions;
}

var questionsPromise = loadQuestions();

export { questionsPromise as questions };
