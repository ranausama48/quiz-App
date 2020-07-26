import { SingleQuestion, OverallQuiz } from "../Types/quiz_types";
export const getApiData = async (
  totalQuestion: number,
  levvel: string
): Promise<OverallQuiz[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${levvel}&type=multiple`
  );
  let { results } = await res.json();
  const quiz = results.map((questionObj: OverallQuiz, index: number) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: questionObj.correct_answer.concat(question.incorrect_answers),
    };
  });
  return quiz;
};
