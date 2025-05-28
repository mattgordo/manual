import React, { useEffect, useState } from "react";

export type Questions = {
  question: string,
  options: {
    display: string,
    value: boolean,
    isRejection: boolean
  }[]
}

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);

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