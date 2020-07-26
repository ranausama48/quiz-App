import { OverallQuiz, SingleQuestion } from "../Types/quiz_types";
export const shuffleArray = (array: any[]) => {
  [...array].sort(() => Math.random() - 0.5);
};

export const getApiData = async (
  catagory: string,
  questionLength: string,
  level: string
): Promise<SingleQuestion[]> => {
  console.log("questionLength", questionLength);
  console.log("catagory", catagory);

  console.log("level", level);

  const res = await fetch(
    `https://opentdb.com/api.php??amount=${questionLength}&category=${catagory}&difficulty=${level}`
  );
  console.log(res);
  let { results } = await res.json();
  console.log(results);
  const quiz: SingleQuestion[] = results.map((questionObj: OverallQuiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: questionObj.incorrect_answers.concat(questionObj.correct_answer),
    };
  });
  return quiz;
};

export const getCatories = async () => {
  const res = await fetch(`https://opentdb.com/api_category.php`);
  const { trivia_categories } = await res.json();
  return trivia_categories;
};
