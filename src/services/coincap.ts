import api from './coincap.instance';
import { Coin } from '@/types';

export type DataResponse<T> = {
  data: T;
};

/**
 * Get list of assets
 */
export type AssetsListResponse = DataResponse<Coin[]>;
export type AssetsParams = {
  limit?: number | string | string[];
};

export const getAssets = (params: AssetsParams) => {
  return api.get<AssetsListResponse>('/assets/', { params }).then((res) => res.data);
};

/**
 * Get asset by id
 */
export type AssetDetailResponse = DataResponse<Coin>;
export const getAsset = (id: string | string[]) => {
  return api.get<AssetsListResponse>(`/assets/${id}`).then((res) => res.data);
};
