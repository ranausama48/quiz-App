import { OverallQuiz, SingleQuestion } from "../Types/quiz_types";
export const shuffleArray = (array: any[]) => {
  [...array].sort(() => Math.random() - 0.5);
};

export const getApiData = async (
  totalQuestion: number,
  levvel: string
): Promise<SingleQuestion[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${levvel}&type=multiple`
  );
  let { results } = await res.json();
  const quiz: SingleQuestion[] = results.map((questionObj: OverallQuiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: questionObj.incorrect_answers.concat(questionObj.correct_answer),
    };
  });
  return quiz;
};
