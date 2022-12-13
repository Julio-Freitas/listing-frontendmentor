import { rest } from 'msw';
import { listingData, listingEmptyData } from './responses/listing.data';

export const handlers = [
  rest.get('http://localhost:3000/api/list', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(listingData))
  )
];

export const listDataHandlers = [
  rest.get('http://localhost:3000/api/list', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(listingData))
  )
];
export const listDataFailHandlers = [
  rest.get('http://localhost:3000/api/list', (req, res, ctx) =>
    res(ctx.status(400), ctx.json(listingEmptyData))
  )
];
