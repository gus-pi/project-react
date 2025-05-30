import ListingDetailsCard from '@/components/ListingDetailCard';
import { Spinner } from '@/components/ui';
import useFetch from '@/hooks/useFetch';

import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: listing,
    error,
    isLoading,
  } = useFetch(`/api/listings/${listingId}`);

  const renderListing = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      );
    }

    if (error) {
      return <div className='text-center'>{error}</div>;
    }

    return <ListingDetailsCard listing={listing} />;
  };

  return <div className='container py-4'>{renderListing()}</div>;
};
export default ListingDetailsPage;
