import { useSelector } from 'react-redux';
import { Card, CardContent, Separator } from './ui';
import { UserAvatar } from './UserAvatar';
import ReviewCardStars from './ReviewCardStars';

const ReviewCard = ({ review }) => {
  const users = useSelector((state) => state.users);

  const reviewUser = users[review.userId];

  return (
    <Card>
      <CardContent>
        <div className='mb-4 flex flex-row items-center justify-between'>
          <h3 className='mb-0'>{review.title}</h3>
          <ReviewCardStars review={review} />
        </div>
        <Separator className='mb-4' />
        {reviewUser && (
          <>
            <UserAvatar user={reviewUser} />
            <Separator className='my-4' />
          </>
        )}
        <div className='whitespace-pre-line'>{review.comment}</div>
      </CardContent>
    </Card>
  );
};
export default ReviewCard;
