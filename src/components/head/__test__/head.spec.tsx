import React from 'react';
import { render } from '@testing-library/react';
import { Head } from '..';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => children
}));

describe('<Head />', () => {
  it('should be render correctly', async () => {
    const title = 'text title';
    render(<Head title={title} description="description" />, {
      container: document.head
    });
    expect(document.title).toBe(title);
  });
});
