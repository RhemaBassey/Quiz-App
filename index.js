document.addEventListener("DOMContentLoaded", function () {
  var previousBtn = document.getElementById("previousBtn");
  var nextBtn = document.getElementById("nextBtn");

  var questions = [
    {
      question: "Q1",
      options: ["Q1 OP1", "Q1 OP2", "Q1 OP3", "Q1 OP4"],
    },
    {
      question: "Q2",
      options: ["Q2 OP1", "Q2 OP2", "Q2 OP3", "Q2 OP4"],
    },
    {
      question: "Q3",
      options: ["Q3 OP1", "Q3 OP2", "Q3 OP3", "Q3 OP4"],
    },
    {
      question: "Q4",
      options: ["Q4 OP1", "Q4 OP2", "Q4 OP3", "Q4 OP4"],
    },
    {
      question: "Q5",
      options: ["Q5 OP1", "Q5 OP2", "Q5 OP3", "Q5 OP4"],
    },
  ];

  // var questions = []
  // for(var i=0; i<50; i++){
  //  questions.push("blah ".repeat((i+1)*2))
  // }
  var questionCount = 1;
  var questionCountMax = questions.length;

  var num = document.getElementById("num");
  var displayedQuestion = document.getElementById("displayedQuestion");
  var displayedQuestionCount = document.getElementById(
    "displayedQuestionCount"
  );
  var displayedQuestionCountMax = document.getElementById(
    "displayedQuestionCountMax"
  );

  displayedQuestionCount.innerText = questionCount;
  displayedQuestionCountMax.innerText = questionCountMax;
  displayedQuestion.innerText = questions[questionCount - 1].question;

  previousBtn.addEventListener("click", function () {
    if (questionCount > 1) {
      questionCount--;
      displayedQuestion.innerText = questions[questionCount - 1].question;
      num.start = questionCount;

      for (option of questions[questionCount - 1].options) {
        var question = document.createElement();
      }
    }
  });

  nextBtn.addEventListener("click", function () {
    if (questionCount < questionCountMax) {
      questionCount++;
      displayedQuestion.innerText = questions[questionCount - 1].question;
      num.start = questionCount;

      for (let option of questions[questionCount - 1].options) {
        console.log(option);
      }
    }
  });
});
