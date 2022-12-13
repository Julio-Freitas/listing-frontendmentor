import { act, renderHook } from '@testing-library/react';
import { listDataFailHandlers, listDataHandlers } from '../../mocks/handlers';
import { listingData } from '../../mocks/responses/listing.data';

import { server } from '../../mocks/server';

import useFetchList from '../useFetchList';

describe('UseFetchList', () => {
  it('should return data of listing with sucess', async () => {
    const { result } = renderHook(useFetchList);

    await act(async () => {
      server.use(...listDataHandlers);
    });
    expect(result.current.response).toEqual(listingData);
  });

  it('should return data of listing with empt', async () => {
    const { result } = renderHook(useFetchList);

    await act(async () => {
      server.use(...listDataFailHandlers);
    });
    expect(result.current.response).toBeNull();
    expect(result.current.error).toEqual('Error!');
  });
});
