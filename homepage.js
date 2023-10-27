document.addEventListener("DOMContentLoaded", function () {
  var subjectsContainer = document.getElementById("subjectsContainer");
  var subjects = [
    "Maths",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Random",
    "extra"
  ];

  for (subject of subjects) {
    var subjectCard = document.createElement("div");
    var subjectCardImage = document.createElement("img")
    subjectCardImage.className = 'subjectcardimage'
    subjectCardImage.src = "https://th.bing.com/th/id/R.648daa73c4b2534b544be2d8e5eeb91a?rik=viV2AFC3%2btB60g&pid=ImgRaw&r=0"
    subjectCardImage.alt= subject + "-poster-image"


    subjectCard.className = "card";
    subjectCard.innerText = subject;
    subjectCard.appendChild(subjectCardImage)

    subjectsContainer.appendChild(subjectCard);
  }
});
