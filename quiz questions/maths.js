export var questions = [
    {
      question: "20+(90÷2) is equal to:",
      options: ["50", "55", "65", "60"],
      answer: "65",
    },
    {
      question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "You are the baker. You have 253 loaves of bread and 152 donuts. You are making 13 more loaves of bread and 4 donuts, while a boy bought 7 donuts and 17 loaves of bread. How many loaves of bread and donuts do you still have?",
      options: ["264", "398", "402", "372", "153"],
      answer: "398",
    },
    {
      question: "Two baseballs and bat costs $11. If the bat is $10 more than the baseballs. How much is a baseball?",
      options: ["$1", "$0.25", "$0.5","$10"],
      answer: "Q5 OP1",
    },
  ].sort(() => Math.random() - 0.5);

  // localStorage.setItem("MathsQuestions", JSON.stringify(questions))