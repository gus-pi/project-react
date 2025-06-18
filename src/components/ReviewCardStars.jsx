import { cn } from '@/lib/utils/cn';
import { Star } from 'lucide-react';

const ReviewCardStars = ({ className, review }) => {
  return (
    <div
      className={cn(
        'inline-flex flex-row items-center rounded-md bg-background px-2 py-1',
        className,
      )}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn('h-5 w-5 fill-secondary text-secondary', {
            'fill-star text-star': 1 < review.rating,
          })}
        />
      ))}
      <span className='ml-2'>{review.rating}</span>
    </div>
  );
};
export default ReviewCardStars;
