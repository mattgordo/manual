import React, { useEffect, useState } from "react";

export type Questions = {
  question: string,
  options: {
    display: string,
    value: boolean | string,
    isRejection: boolean
  }[]
}

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);

  // Was getting CORS errors using https://manual-case-study.herokuapp.com/questionnaires/972423.json 
  // so created my own API endpoint
  const url = '/api/questions';

  const getQuestions = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('No questions found');
      }

      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    if (questions.length === 0) {
      getQuestions();
    }
  }, []);

  return questions
}