import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchData = (endpoint, fallbackData) => {
  const { data, error } = useSWR(endpoint, fetcher, { fallbackData });
  return { data, error };
};