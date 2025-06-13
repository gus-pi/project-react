import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailCard';
import useListingsDetailsQuery from '@/hooks/queries/useListingDetailsQuery';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: { data: listing } = {},
    error,
    isLoading,
  } = useListingsDetailsQuery(listingId);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};
export default ListingDetailsPage;
