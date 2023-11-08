export var questions = [
  {
    question:
      "You are the baker. You have 253 loaves of bread and 152 donuts. You are making 13 more loaves of bread and 4 donuts, while a boy bought 7 donuts and 17 loaves of bread. How many loaves of bread and donuts do you still have?",
    options: ["264", "398", "402", "372", "153"],
    answer: "398",
  },
  {
    question:
      "Two baseballs and bat costs $11. If the bat is $10 more than the baseballs. How much is a baseball?",
    options: ["$1", "$0.25", "$0.5", "$10"],
    answer: "$0.25",
  },
  {
    question:
      "If 2a − 1 = 4/y, and y ≠ 0 where a ≠ 1, what is y in terms of a?",
    options: ["y = 2a − 2", "y = 2a − 4", "y = 2a − 2/1", "y = 1/2a + 1"],
    answer: "y = 2a − 2",
  },
  {
    question: "What is the sum of 130+125+191?",
    options: ["335", "456", "446", "426"],
    answer: 446,
  },
  {
    question: "If we minus 712 from 1500, how much do we get?",
    options: ["788", "778", "768", "758"],
    answer: 788,
  },
  {
    question: "50 times of 8 is equal to:",
    options: ["80", "400", "800", "4000"],
    answer: 400,
  },
  {
    question: "110 divided by 10 is:",
    options: ["11", "10", "5", "None of these"],
    answer: 11,
  },
  {
    question: "20+(90÷2) is equal to:",
    options: ["50", "55", "65", "60"],
    answer: 65,
  },
  {
    question: "The product of 82 and 5 is:",
    options: ["400", "410", "420", "None of these"],
    answer: 410,
  },
  {
    question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
    options: ["10", "11", "12", "13"],
    answer: 12,
  },
  {
    question: "Solve 24÷8+2.",
    options: ["5", "6", "8", "12"],
    answer: 5,
  },
  {
    question: "Solve: 300 – (150×2)",
    options: ["150", "100", "50", "0"],
    answer: 0,
  },
  {
    question: "The product of 121 x 0 x 200 x 25 is",
    options: ["1500", "0", "4000", "None of these"],
    answer: 0,
  },
  {
    question: "What is the next prime number after 5?",
    options: ["6", "7", "9", "11"],
    answer: 7,
  },
].sort(() => Math.random() - 0.5);

// localStorage.setItem("MathsQuestions", JSON.stringify(questions))
