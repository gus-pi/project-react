import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useMemo } from 'react';
import {
  addFavoriteListing,
  removeFavoriteListing,
} from '@/state/listings/listingsSlice';

const ListingFavoriteButton = ({ className, listing }) => {
  const favoriteListingIds = useSelector(
    (state) => state.listings.favoriteListingIds,
  );
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => favoriteListingIds.includes(listing.id),
    [listing, favoriteListingIds],
  );

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteListing(listing.id));
    } else {
      dispatch(addFavoriteListing(listing.id));
    }
  };

  return (
    <Button className={className} variant='outline' onClick={handleClick}>
      <Heart
        className={cn('h-4 w-4', { 'fill-primary text-primary': isFavorite })}
      />
    </Button>
  );
};

export default ListingFavoriteButton;
