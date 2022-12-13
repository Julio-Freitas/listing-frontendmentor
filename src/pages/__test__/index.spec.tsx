import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { act, render, screen, waitFor } from '@testing-library/react';
import { listDataFailHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { Theme } from '../../styles/theme';
import Home from '..';
import userEvent from '@testing-library/user-event';

const renderWithProviderTheme = (component: ReactNode) => {
  return {
    ...render(<ThemeProvider theme={Theme}>{component}</ThemeProvider>)
  };
};

describe('Testing home', () => {
  it('should render conrrectly', async () => {
    const { container } = await act(async () => {
      return renderWithProviderTheme(<Home />);
    });

    expect(screen.queryByTestId('header')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render when click in any tags', async () => {
    await act(async () => {
      return renderWithProviderTheme(<Home />);
    });
    const list = screen.getByTestId('skills');
    const header = screen.getByTestId('header');

    userEvent.click(list.children[0]);
    expect(header.childElementCount).toBe(1);

    await waitFor(() => {
      const tagHeader = screen.getAllByRole('listitem-skills');
      expect(tagHeader[0]).toHaveTextContent(/html/gi);
    });

    expect(header.childElementCount).toBe(2);
    expect(list).toHaveTextContent(/Html/gi);
    expect(screen.queryByTestId('header')).toBeInTheDocument();
  });

  it('should render when click in tags of header', async () => {
    await act(async () => {
      return renderWithProviderTheme(<Home />);
    });
    const list = screen.getByTestId('skills');
    const header = screen.getByTestId('header');

    userEvent.click(list.children[0]);

    await waitFor(async () => {
      const tagHeader = screen.getAllByRole('listitem-skills');
      expect(tagHeader[0]).toHaveTextContent(/html/gi);
      expect(header.childElementCount).toBe(2);
      await userEvent.click(tagHeader[0]);
    });

    expect(header.childElementCount).toBe(1);
    expect(list).toHaveTextContent(/Html/gi);
    expect(screen.queryByTestId('header')).toBeInTheDocument();
  });

  it('should render conrrectly when click', async () => {
    await act(async () => {
      server.use(...listDataFailHandlers);
      renderWithProviderTheme(<Home />);
    });
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Algo de errado aconteceu!')).toBeInTheDocument();
  });
});
