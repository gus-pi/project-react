import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailCard';
import ReviewsList from '@/components/ReviewsList';
import useListingsDetailsQuery from '@/hooks/queries/useListingDetailsQuery';
import useListingReviewsQuery from '@/hooks/queries/useListingReviewsQuery';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: { data: listing } = {},
    error,
    isLoading,
  } = useListingsDetailsQuery(listingId);

  const {
    data: { data: reviews } = {},
    error: reviewsError,
    isLoading: isReviewsLoading,
  } = useListingReviewsQuery(listingId);

  return (
    <div className='container py-4'>
      <div className='mb-8'>
        <DataRenderer error={error} isLoading={isLoading}>
          <ListingDetailsCard listing={listing} />
        </DataRenderer>
      </div>
      {listing && (
        <div>
          <h2 className='mb-4'>Reviews</h2>
          <DataRenderer error={reviewsError} isLoading={isReviewsLoading}>
            <ReviewsList reviews={reviews} />
          </DataRenderer>
        </div>
      )}
    </div>
  );
};
export default ListingDetailsPage;
