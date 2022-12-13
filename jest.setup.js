import { defaultFallbackInView } from 'react-intersection-observer';
import { server } from './src/mocks/server';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'jest-styled-components';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

global.IntersectionObserver = jest.fn();
defaultFallbackInView(false);
