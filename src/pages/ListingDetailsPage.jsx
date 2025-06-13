import api from '@/api';
import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: { data: listing } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ['listing', listingId],
    queryFn: () => api.get(`/api/listings/${listingId}`),
  });

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};
export default ListingDetailsPage;
