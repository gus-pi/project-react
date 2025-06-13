import api from '@/api';
import { useQuery } from '@tanstack/react-query';

const useListingsDetailsQuery = (listingId) => {
  return useQuery({
    queryKey: ['listing', listingId],
    queryFn: () => api.get(`/api/listings/${listingId}`),
  });
};

export default useListingsDetailsQuery;
