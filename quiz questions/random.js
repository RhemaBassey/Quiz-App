import { questions as mathsQuestions} from "./maths.js";
import { questions as physicsQuestions} from "./physics.js";
import { questions as chemistryQuestions} from "./chemistry.js";
import { questions as biologyQuestions} from "./biology.js";
import { questions as historyQuestions} from "./history.js";

var subjectsQuestions = [mathsQuestions, physicsQuestions, chemistryQuestions, biologyQuestions, historyQuestions]

var x = []

for(var subjectQuestions of subjectsQuestions){
  for (var question of subjectQuestions){
    x.push(question)
  }

}

function shuffleArray(array) { 
  return array.sort(() => Math.random() - 0.5);
}

export var questions = shuffleArray(x)