import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../../styles/theme';
import { Header } from '..';

const renderWithProviderTheme = (component: React.ReactNode) => {
  return {
    ...render(<ThemeProvider theme={Theme}>{component}</ThemeProvider>)
  };
};

const mockedClickTagsHeader = jest.fn();

describe('<Card />', () => {
  it('should be render correctly', () => {
    const { container } = renderWithProviderTheme(
      <Header tagsFilter={['CSS', 'HTML']} />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByRole('list-skills-header').childElementCount).toBe(2);
  });

  it('should be render correctly without tags header', () => {
    renderWithProviderTheme(
      <Header onClickTagsHeader={mockedClickTagsHeader} />
    );
    expect(screen.queryByRole('list-skills-header')).not.toBeInTheDocument();
    expect(mockedClickTagsHeader).toBeCalledTimes(0);
  });

  it('should click in some tags heaer', async () => {
    renderWithProviderTheme(
      <Header
        tagsFilter={['CSS', 'HTML']}
        onClickTagsHeader={mockedClickTagsHeader}
      />
    );
    const [cssTag] = screen.getAllByRole('listitem-skills');

    await userEvent.click(cssTag);
    expect(mockedClickTagsHeader).toHaveBeenCalledWith('CSS');
  });
});
