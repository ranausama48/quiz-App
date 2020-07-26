// import React from "react";

export type OverallQuiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type SingleQuestion = {
  question: string;
  answer: string;
  option: string[];
};
export type PropTypes = {
  option: string[];
  question: string;
  score: any;
  nextHanlder: (e: React.FormEvent<EventTarget>, ans: string) => void;
  // changeHandler: (e: any) => void;
};

export type Catagories = {
  id: number;
  name: string;
};
