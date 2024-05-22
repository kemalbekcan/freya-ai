import useSWR, { SWRConfiguration } from 'swr';

const defaultSWRConfig: SWRConfiguration<any, any> = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshInterval: 0, // otomatik yenileme
};

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useCustomSWR = <Data = any, Error = any>(key: string, config?: SWRConfiguration<Data, Error>) => {
  return useSWR<Data, Error>(key, fetcher, { ...defaultSWRConfig, ...config });
};