import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../../styles/theme';
import { Card } from '..';

const mockedProps = {
  id: 1,
  company: 'Photosnap',
  logo: '/images/photosnap.svg',
  new: true,
  featured: true,
  position: 'Senior Frontend Developer',
  role: 'Frontend',
  level: 'Senior',
  postedAt: '1d ago',
  contract: 'Full Time',
  location: 'USA Only',
  languages: ['HTML', 'CSS', 'JavaScript'],
  tools: [],
  onClickLanguage: () => false
};

const renderWithProviderTheme = (component: React.ReactNode) => {
  return {
    ...render(<ThemeProvider theme={Theme}>{component}</ThemeProvider>)
  };
};

describe('<Card />', () => {
  it('should be render correctly', () => {
    const { container } = renderWithProviderTheme(
      <Card {...mockedProps} isFeatured isNew />
    );
    expect(container.firstChild).toMatchSnapshot();

    const skills = screen.getByTestId('skills');
    const newEl = screen.getByTestId('new');

    expect(screen.getByText('Photosnap')).toBeInTheDocument();
    expect(screen.getByText('Senior Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('1d ago')).toBeInTheDocument();
    expect(screen.getByText('Full Time')).toBeInTheDocument();
    expect(screen.getByText('USA Only')).toBeInTheDocument();

    expect(newEl).toBeInTheDocument();
    expect(skills.childNodes.length).toBe(mockedProps.languages.length);
  });

  it('should be render correctly info new is false', () => {
    renderWithProviderTheme(<Card {...mockedProps} isNew={false} isFeatured />);

    const newEl = screen.queryByTestId('new');
    expect(newEl).toBeNull();
  });

  it('should be render correctly info featured is false', () => {
    renderWithProviderTheme(<Card {...mockedProps} isFeatured={false} isNew />);

    const featuredEl = screen.queryByTestId('featured');
    expect(featuredEl).toBeNull();
  });
});
