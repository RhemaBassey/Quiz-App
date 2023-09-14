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
      options: ["Q2 OP1", "Q2 OP2"],
    },
    {
      question: "Q3",
      options: ["Q3 OP1", "Q3 OP2", "Q3 OP3", "Q3 OP4"],
    },
    {
      question: "Q4",
      options: ["Q4 OP1", "Q4 OP2", "Q4 OP3"],
    },
    {
      question: "Q5",
      options: ["Q5 OP1", "Q5 OP2", "Q5 OP3", "Q5 OP4", "Q5 OP5"],
    },
  ];

  var randomizeQuestions = true;

  if (randomizeQuestions == true) {
    for (var i in questions) {
      questions[i].options.sort(() => Math.random() - 0.5); //this will randomize the questions
    }
  }

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
  var displayedOptions = document.getElementById("displayedOptions");

  displayedQuestionCount.innerText = questionCount;
  displayedQuestionCountMax.innerText = questionCountMax;
  displayedQuestion.innerText = questions[questionCount - 1].question;

  function addOptions(questions) {
    displayedOptions.innerHTML = "";
    for (option of questions[questionCount - 1].options) {
      var optionBtn = document.createElement("button");
      optionBtn.className = "options-btn hoverable1";
      optionBtn.innerHTML = "<li>" + option + "</li>";
      displayedOptions.appendChild(optionBtn);
    }
  }
  addOptions(questions);

  var displayedOptionsBtn = document.getElementsByClassName(
    "options-btn hoverable1"
  );
  previousBtn.classList.add("disabled");

  for (var btn in displayedOptionsBtn) {
    console.log(btn);
  }
  previousBtn.addEventListener("click", function () {
    if (questionCount > 1) {
      questionCount--;

      if (questionCount == 1) {
        previousBtn.classList.add("disabled");
      }
      nextBtn.innerHTML = "<i class='fa-solid fa-arrow-right'></i>";
      displayedQuestionCount.innerText = questionCount;
      displayedQuestion.innerText = questions[questionCount - 1].question;
      num.start = questionCount;

      addOptions(questions);
    } else {
      previousBtn.classList.add("disabled");
    }
  });

  nextBtn.addEventListener("click", function () {
    if (questionCount < questionCountMax) {
      questionCount++;
      if (questionCount == questionCountMax) {
        nextBtn.innerHTML = "SUBMIT";
      }
      previousBtn.classList.remove("disabled");
      displayedQuestionCount.innerText = questionCount;
      num.start = questionCount;
      displayedQuestion.innerText = questions[questionCount - 1].question;
      addOptions(questions);
    }
  });

  for (var n in displayedOptionsBtn) {
    displayedOptionsBtn[n].addEventListener("click", function () {
      
      if (questionCount < questionCountMax) {
        questionCount++;
        if (questionCount == questionCountMax) {
          nextBtn.innerHTML = "SUBMIT";
        }
        previousBtn.classList.remove("disabled");
        displayedQuestionCount.innerText = questionCount;
        num.start = questionCount;
        displayedQuestion.innerText = questions[questionCount - 1].question;
        addOptions(questions);
      }
      
    });
  }
});
