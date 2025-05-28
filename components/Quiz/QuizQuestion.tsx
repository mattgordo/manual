import React, { Dispatch, EventHandler, SetStateAction } from "react";

import parse from 'html-react-parser';

import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import { getAnswers } from "./Quiz.helpers";
import { Questions } from "./useGetQuestions";

import styles from './QuizQuestion.module.scss';

export type QuizQuestionProps = {
  question: Questions,
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

// Get value of alt attribute in HTML string
const regexMatch = /(?<=alt=")(.*?)(?=")/;

export const QuizQuestion = ({ currentQuestion, setCurrentQuestion, question }: QuizQuestionProps) => {
  const { setItem: setAnswers}  = useLocalStorage<string[]>(QUIZ_ANSWERS_KEY);

  const { question: questionText, options } = question ?? {};

  const answers = getAnswers();

  const selectAnswer = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e?.currentTarget;
    const input = label.querySelector('input');

    answers[currentQuestion] = input ? input?.value : '';
    setAnswers(answers);
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  }
  
  return <div className={styles.quizQuestion} data-question={currentQuestion + 1}>
    <p>{questionText}</p>
    <ul className={styles.questions}>
      {options.map(({display}, index) => {
        // A simple check to see if the response has an alt tag
        // to determine if response returns an image and not string
        const hasImage = display.match(regexMatch);
        const label = hasImage ? hasImage[0] : display;

        // If the display value is an HTML in a string,
        // we need to parse it back to HTML to render
        const radioInput = hasImage
          ? <div className={styles.inputLabelImage}>
              {parse(display)}
              <span>{label}</span>
            </div>
          : <div className={styles.inputLabel}>
              {label}
            </div>

        const isSelected = answers[currentQuestion] === label;

        return <li key={index}>
          <label htmlFor={String(index)} className={styles.questionLabel} onClick={selectAnswer} data-selected={isSelected}>
            <input
              className={styles.questionInput}
              type="radio"
              name={label ?? display}
              value={label ?? display}
              defaultChecked={isSelected}
            />
            {radioInput}
          </label>
        </li>
      })}
    </ul>
    <button role="button" className={styles.quizButton} onClick={() => setCurrentQuestion((currentQuestion) => currentQuestion - 1)}>Previous</button>
  </div>
}