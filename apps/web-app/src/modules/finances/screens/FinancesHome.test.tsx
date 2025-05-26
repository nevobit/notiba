import React from 'react';
import { render, screen } from '@testing-library/react';
import FinancesHome from './FinancesHome';

describe('FinancesHome', () => {
  it('renders the Finances heading', () => {
    render(<FinancesHome />);
    const headingElement = screen.getByText(/Finances/i);
    expect(headingElement).toBeInTheDocument();
  });
});
