import api from '@/api/api';
import { GameSearchResults } from '@/types/GameSearchResults';
import { SearchParams } from '@/types/SearchParamsTypes';

export const searchGames = async (params: SearchParams): Promise<GameSearchResults> => {
  const response = await api.get('/games/search', {
    params,
  });
  return response.data;
};
