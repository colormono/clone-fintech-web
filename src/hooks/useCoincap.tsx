import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { Coin } from '@/types';

export function useCoincapAssets() {
  const { data, error } = useSWR<Coin[]>('/api/coincap', fetcher, { revalidateOnFocus: false });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useCoincapAsset(id) {
  const { data, error } = useSWR<Coin>(`/api/coincap/${id}`, fetcher, { revalidateOnFocus: false });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
