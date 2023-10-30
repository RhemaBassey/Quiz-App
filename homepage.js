document.addEventListener("DOMContentLoaded", function () {
  var subjectsContainer = document.getElementById("subjectsContainer");
  var subjects = [
    {
      title: "Maths",

      text: " Test your mathematical skills with a range of questions covering topics like algebra, geometry, calculus, and more.",
    },
    {
      title: "Physics",

      text: "This subject covers areas like motion, energy, electricity, magnetism, and more. Test your understanding of the natural laws that govern our world.",
    },
    {
      title: "Chemistry",
      text: "Dive into the realm of atoms, molecules, reactions, and the periodic table to test your chemical knowledge.",
    },
    {
      title: "Biology",
      text: " Delve into the world of living organisms, their structures, functions, and ecosystems. Test your knowledge on topics ranging from cells and genetics to ecology and evolution.",
    },
    {
      title: "History",
      text: "Travel through time and test your knowledge of historical events, figures, and civilizations from various eras.",
    },
    {
      title: "Random",
      text: " Challenge yourself with a mix of questions from different subjects, providing a diverse and fun quiz experience.",
    },
  ];

  for (subject of subjects) {
    var subjectCard = document.createElement("div");
    var subjectCardTitle = document.createElement("h2");
    var subjectCardImage = document.createElement("img");
    var subjectCardText = document.createElement("p");
    var imageName = subject.title.toLowerCase() + "-poster-image.jpg";

    subjectCardImage.className = "subjectcardimage";
    subjectCardImage.src = "/images/" + imageName;
    subjectCardImage.alt = imageName;
    subjectCardTitle.innerText = subject.title;
    subjectCardText.innerText = subject.text;
    subjectCard.className = "card";
    subjectCard.appendChild(subjectCardTitle);
    subjectCard.appendChild(subjectCardImage);
    subjectCard.appendChild(subjectCardText);

    subjectsContainer.appendChild(subjectCard);

    
  subjectCard.addEventListener('click', function() {
    // Define the URL you want to navigate to
    var destinationURL = 'quiz room.html'; // Replace with your desired URL

    // Redirect to the specified URL
    window.location.href = destinationURL;
  });
  }

});
