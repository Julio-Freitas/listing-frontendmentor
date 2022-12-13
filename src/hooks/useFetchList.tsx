import API from 'config/api';
import { LISTTING } from 'constantes/uri';
import { useCallback, useEffect, useState } from 'react';
import { ResponseData } from 'types';

export default function useFetchList() {
  const [response, setResponse] = useState<Pick<ResponseData, 'data'> | null>({
    data: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchListCallback = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await API.get(LISTTING);

      setResponse(data);

      setError(null);
    } catch (error) {
      setError('Error!');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListCallback();
  }, [fetchListCallback]);

  return {
    response,
    loading,
    error
  };
}
