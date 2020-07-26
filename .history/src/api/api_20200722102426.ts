import { QuestionTypes, Quiz } from "../Types/quiz_types";
export async function getApiData(totalQuestion: number, levvel: string) {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${levvel}&type=multiple`
  );
  let { results }: Quiz[] = await res.json();
  return results;
}
