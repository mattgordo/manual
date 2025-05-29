import React, { Dispatch, EventHandler, SetStateAction } from "react";

import parse from 'html-react-parser';

import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import { getAnswers, hasImageAsValue } from "./Quiz.helpers";
import { Questions } from "./useGetQuestions";

import styles from './QuizQuestion.module.scss';

export type QuizQuestionProps = {
  question: Questions,
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

export const QuizQuestion = ({ currentQuestion, setCurrentQuestion, question }: QuizQuestionProps) => {
  const { setItem: setAnswers}  = useLocalStorage<(string | boolean)[]>(QUIZ_ANSWERS_KEY);

  const { question: questionText, options } = question ?? {};

  const answers = getAnswers();

  const selectAnswer = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e?.currentTarget;
    const input = label.querySelector('input');

    switch (true) {
      case input?.value === 'true':
        answers[currentQuestion] = true;
        break;
      case input?.value === 'false':
        answers[currentQuestion] = false;
        break;
      default:
        answers[currentQuestion] = input?.value ?? '';
    }

    setAnswers(answers);
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  }

  const showNextNav = typeof answers[currentQuestion] !== 'undefined';
  const showPrevNav = currentQuestion !== 0;
  
  return <div className={styles.quizQuestion} data-question={currentQuestion + 1}>
    <p className={styles.questionTitle}>{questionText}</p>
    <ul className={styles.questions}>
      {options.map(({display, value}, index) => {

        // A simple check to see if the response has an alt tag
        // to determine if response returns an image and not string
        const hasImage = hasImageAsValue(display);
        // const label = hasImage ? hasImage[0] : display;

        // If the display value is an HTML in a string,
        // we need to parse it back to HTML to render
        const radioInput = hasImage
          ? <div className={styles.inputLabelImage}>
              {parse(display)}
              <span>{value}</span>
            </div>
          : <div className={styles.inputLabel}>
              {display}
            </div>

        const isSelected = answers[currentQuestion] === value;

        return <li key={index} className={styles.question}>
          <label className={styles.questionLabel} onClick={selectAnswer} data-selected={isSelected}>
            <input
              className={styles.questionInput}
              type="radio"
              name={hasImage?.[0] ?? display}
              value={String(value)}
              defaultChecked={isSelected}
            />
            {radioInput}
          </label>
        </li>
      })}
    </ul>

    
    {(showNextNav || showPrevNav)
      ? <nav className={styles.questionNav}>
          {currentQuestion !== 0
            ? <button
                data-id="previous"
                role="button"
                className={styles.navButton}
                onClick={() => setCurrentQuestion((currentQuestion) => currentQuestion - 1)}>
                  <img src="/arrow-left-icon.svg" height="30" width="30" /> Previous
              </button>
            : null}
          {typeof answers[currentQuestion] !== 'undefined'
            ? <button
                data-id="next"
                role="button"
                className={styles.navButton}
                onClick={() => setCurrentQuestion((currentQuestion) => currentQuestion + 1)}>
                  Next <img src="/arrow-right-icon.svg" height="30" width="30" /> 
              </button>
            : null}
        </nav>
      : null}
  </div>
}