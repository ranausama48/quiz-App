import { SingleQuestion, OverallQuiz } from "../Types/quiz_types";
export getApiData = async (totalQuestion: number, levvel: string)=> {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${levvel}&type=multiple`
  );
  let { results } = await res.json();
  return results;
}
