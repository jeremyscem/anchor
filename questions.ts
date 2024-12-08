import { Question } from "@/types";

export const questions: Question[] = [
  {
    question: "What do people traditionally eat during Hanukkah?",
    id: 1,
    options: [
      { optionId: 0, option: "Sushi" },
      { optionId: 1, option: "Latkes (potato pancakes)" },
      { optionId: 2, option: "Birthday cake" },
      { optionId: 3, option: "Kale chips" }
    ],
    answer: 1
  },
  {
    question: "How many candles does a Hanukkah menorah have?",
    id: 2,
    options: [
      { optionId: 0, option: "7, because it’s a lucky number" },
      { optionId: 1, option: "9, for eight nights and a helper candle" },
      { optionId: 2, option: "10, because we’re overachievers" },
      { optionId: 3, option: "12, one for each month" }
    ],
    answer: 1
  },
  {
    question: "What is the Hebrew word for “spinning top,” which is a popular game during Hanukkah?",
    id: 3,
    options: [
      { optionId: 0, option: "Beyblade" },
      { optionId: 1, option: "Fidget Spinner" },
      { optionId: 2, option: "Dreidel" },
      { optionId: 3, option: "Twister" }
    ],
    answer: 2
  },
  {
    question: "What miraculous event is celebrated during Hanukkah?",
    id:4,
    options: [
      { optionId: 0, option: "Oil lasting eight days instead of one" },
      { optionId: 1, option: "The invention of deep-fried foods" },
      { optionId: 2, option: "A spinning top predicting the future" },
      { optionId: 3, option: "A dog learning how to play dreidel" }
    ],
    answer: 0
  },
  {
    question: "What is the traditional greeting or phrase often said during Hanukkah?",
    id: 5,
    options: [
      { optionId: 0, option: "Happy Oil Days!" },
      { optionId: 1, option: "Light it up!" },
      { optionId: 2, option: "Chag Sameach (Happy Holiday)" },
      { optionId: 3, option: "Don’t forget the latkes!" }
    ],
    answer: 2

  }
];