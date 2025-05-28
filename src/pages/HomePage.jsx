import { useEffect, useState } from 'react';

import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator, Spinner } from '@/components/ui';
import api from '@/api';

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get('/api/listings', { params: filters });
        setListings(response.data);
      } catch {
        setError('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, [filters]);

  const handleFilters = (filters) => {
    setFilters(filters);
  };

  const renderListingList = () => {
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

    return <ListingList listings={listings} />;
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      {renderListingList()}
    </div>
  );
};

export default HomePage;
