import React from 'react';

// Need to import this every time as could not figure out config to import it always unfortunatly
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Hero } from "./Hero";

describe('Hero', () => {
  it('should render Hero', () => {
    const { getByRole } = render(<Hero />);

    const quizButton = getByRole('button', { name: 'TAKE THE QUIZ' });

    expect(getByRole('heading', { name: 'Be good to yourself' })).toBeInTheDocument();
    expect(quizButton).toBeInTheDocument();
  });
});