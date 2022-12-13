import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../../styles/theme';
import { Footer } from '..';

const renderWithProviderTheme = (component: React.ReactNode) => {
  return {
    ...render(<ThemeProvider theme={Theme}>{component}</ThemeProvider>)
  };
};

describe('<Card />', () => {
  it('should be render correctly', () => {
    const { container } = renderWithProviderTheme(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText('Powered by Julio')).toBeInTheDocument();
  });
});
