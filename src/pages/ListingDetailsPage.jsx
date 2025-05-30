import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailCard';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: listing,
    error,
    isLoading,
  } = useFetch(`/api/listings/${listingId}`);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};
export default ListingDetailsPage;
