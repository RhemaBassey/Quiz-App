var imageFolderPath = "/images/"
export var settings = {
  // set the amount of questions you want to take
  maxAllowedQuestions: 10,

  //randomizes the order of your questions
  randomizeQuestionOrder: true,

  //randomizes the order of your options for each question
  randomizeQuestionOptions: true,

  // Select what subject you want displayed on the homepage, omited subjects won't be included in random quiz mode.
  displayedSubjects: ["Maths","physics","chemistry","BIOLOGY","history","random"], // displayedSubjects are case insensitive.


  //all subjects listed below
  subjects: [
    {
      title: "Maths",
      text: " Test your mathematical skills with a range of questions covering topics like algebra, geometry, calculus, and more.",
      imageSrc: imageFolderPath + "maths-poster-image.jpg"
    },
    {
      title: "Physics",
      text: "This subject covers areas like motion, energy, electricity, magnetism, and more. Test your understanding of the natural laws that govern our world.",
      imageSrc: imageFolderPath + "physics-poster-image.jpg"
    },
    {
      title: "Chemistry",
      text: "Dive into the realm of atoms, molecules, reactions, and the periodic table to test your chemical knowledge.",
      imageSrc: imageFolderPath + "chemistry-poster-image.jpg"
    },
    {
      title: "Biology",
      text: " Delve into the world of living organisms, their structures, functions, and ecosystems. Test your knowledge on topics ranging from cells and genetics to ecology and evolution.",
      imageSrc: imageFolderPath + "biology-poster-image.jpg"
    },
    {
      title: "History",
      text: "Travel through time and test your knowledge of historical events, figures, and civilizations from various eras.",
      imageSrc: imageFolderPath + "history-poster-image.jpg"
    },

    {
      // Random isn't treated as a regular subject
      title: "Random",
      text: " Challenge yourself with a mix of questions from different subjects, providing a diverse and fun quiz experience.",
      imageSrc: imageFolderPath + "random-poster-image.jpg"
    },
  ],
};
