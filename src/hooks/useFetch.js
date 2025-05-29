import api from '@/api';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const useFetch = ({ url, options }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      abortController.current = new AbortController();

      try {
        const response = await api.get(url, {
          ...options,
          signal: abortController.current?.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [options, url]);
  return { data, error, isLoading };
};

export default useFetch;
