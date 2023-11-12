var exportData = JSON.parse(localStorage.getItem("exportData"));
var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;
var displayedScore = document.getElementById("displayedScore");
var displayedQuestionCountMax = document.getElementById(
  "displayedQuestionCountMax"
);
var comment = document.getElementById("comment");
var correctionPrompt = document.getElementById("correctionPrompt");

displayedScore.innerText = correctAnswers;
displayedQuestionCountMax.innerText = questionCountMax;
correctionPrompt.innerText = "Review Answers";
comment.innerHTML = starRating();

// commentary based on percentage of correct answers gotten. Grading shown below:
// null (for score == 0%), 'fair' (for scores >= 1/3), 'good' (for scores >= 1/2), 
// excellent (for scores >= 0.8), 'perfect' (for scores == 100%)
if (correctAnswers == questionCountMax) {
  comment.innerHTML += "'Perfect 💯/💯'<br><br>";
} else if (correctAnswers >= questionCountMax * 0.8) {
  comment.innerHTML += "'Excellent 🔥' <br><br>";
} else if (correctAnswers >= questionCountMax * 0.5) {
  comment.innerHTML += "'Good 👍' <br><br>";
} else if (correctAnswers >= questionCountMax * 0.333) {
  comment.innerHTML += "'Fair 🤔' <br><br>";
} else if (correctAnswers > 0) {
  comment.innerHTML += "'Subpar 👎' <br><br>";
} else {
  comment.innerHTML += "'Null (❌_❌)' <br><br>";
}

//generates a star for respective correct answer percentage, shown below:
// 0 stars (for score == 0%), 1 star (for score > 0%), 2 stars (for score > 20%), 
// 3 stars (for score > 40%), 4 stars(for score > 60%), 5 stars(for score > 80%)
function starRating() {
  var num = (correctAnswers / questionCountMax) * 5;
  var icon = "";
  for (var i = 0; i < 5; i++) {
    if (i < num) {
      icon += "<i class='fa-solid fa-star' style='color: yellow;'></i> ";
    } else {
      icon += "<i class='fa-solid fa-star' style='color: grey;'></i> ";
    }
  }
  return icon + "<br><br>";
}
