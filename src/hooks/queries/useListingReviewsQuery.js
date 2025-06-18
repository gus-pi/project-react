import api from '@/api';
import { useQuery } from '@tanstack/react-query';

const useListingReviewsQuery = (listingId) => {
  return useQuery({
    queryKey: ['listingReviews', listingId],
    queryFn: () => api.get(`/api/reviews`, { params: { listingId } }),
  });
};

export default useListingReviewsQuery;
