import React from 'react';

// Need to import this every time as could not figure out config to import it always unfortunatly
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Nav } from "./Nav";

describe('Nav', () => {
  it('should render Nav', () => {
    const { getByRole } = render(<Nav />);

    const homeLink = getByRole('link', { name: 'Manual Logo' });

    expect(getByRole('navigation')).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/')
  });
});