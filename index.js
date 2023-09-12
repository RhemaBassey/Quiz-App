document.addEventListener("DOMContentLoaded", function () {
  var previousBtn = document.getElementById("previousBtn");
  var nextBtn = document.getElementById("nextBtn");

  var questions = ["Blah", "Blah Blah", "Blah Blah Blah"]
  var questionCount = 1;
  var questionCountMax = 20;

  var displayedQuestion = document.getElementById("displayedQuestion");
  var displayedQuestionCount = document.getElementById("displayedQuestionCount");
  var displayedQuestionCountMax = document.getElementById("displayedQuestionCountMax");

  displayedQuestionCount.innerText = questionCount
  displayedQuestionCountMax.innerText = questionCountMax

  previousBtn.addEventListener("click", function () {
    if (questionCount > 1) {
      questionCount--;
      displayedQuestionCount.innerText = questionCount;
      console.log("prev questionCount: Question " + questionCount);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (questionCount < questionCountMax) {
      questionCount++;
      displayedQuestionCount.innerText = questionCount;
      console.log("next questionCount: Question " + questionCount);
    }
  });
});
