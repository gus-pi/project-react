import api from '@/api';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      abortControllerRef.current = new AbortController();

      try {
        const response = await api.get(url, {
          ...options,
          signal: abortControllerRef.current?.signal,
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
      abortControllerRef.current?.abort();
    };
  }, [options, url]);
  return { data, error, isLoading };
};

export default useFetch;
