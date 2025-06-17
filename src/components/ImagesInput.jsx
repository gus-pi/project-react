import { useController } from 'react-hook-form';
import { Carousel, CarouselContent, CarouselItem } from './ui';
import { useState } from 'react';
import { getImageUrl } from '@/lib/utils/images';

const ImagesInput = ({ control, name }) => {
  const form = useController({ control, name });
  const [selectedImages, setSelectedImages] = useState([]);

  const imageOptions = [
    'listing1-1.jpg',
    'listing1-2.jpg',
    'listing1-3.jpg',
    'listing1-4.jpg',
    'listing1-5.jpg',
    'listing1-6.jpg',
    'listing1-7.jpg',
  ];

  const handleImageSelect = (image) => {
    const currentImages = form.field.value || [];

    const updatedImages = currentImages.includes(image)
      ? currentImages.filter((img) => image !== img)
      : [...currentImages, image];

    setSelectedImages(updatedImages);
    form.field.onChange(updatedImages);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Carousel className='2-[90%] mx-auto'>
        <CarouselContent>
          {imageOptions.map((image) => (
            <CarouselItem
              key={image}
              className='basis-1/3'
              isSelected={selectedImages.includes(image)}
              onClick={() => handleImageSelect(image)}
            >
              <img
                className='h-[200px] w-full cursor-pointer rounded-md object-cover'
                src={getImageUrl(image)}
                alt={`Listing Image Option ${image}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {form.fieldState.error?.message && (
        <div className='text-sm text-red-500'>
          {form.fieldState.error.message}
        </div>
      )}
    </div>
  );
};
export default ImagesInput;
