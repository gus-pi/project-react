import { getImageUrl } from '@/lib/utils/images';
import { Card, CardContent } from './ui';

const ListingCard = ({ listing }) => {
  return (
    <Card className='w-[320px]'>
      <img
        className='h-[200px] w-full rounded-md object-cover'
        src={getImageUrl(listing.images[0])}
        alt={listing.name}
      />
      <CardContent className='p-4'>
        <h2 className='mb-0 text-xl font-semibold'>{listing.name}</h2>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
