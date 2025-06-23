import { Search } from 'lucide-react';
import { Button, DateRangePicker, Input, Stepper } from './ui';
import { memo, useState } from 'react';

const ListingFilters = ({ onChange }) => {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState(0);
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    onChange({ dates, guests, search });
  };

  return (
    <div
      className='flex flex-row items-center gap-2'
      data-testid='listing-filters'
    >
      <Input
        className='w-[400px]'
        placeholder='Search destinations'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        placeholder='Add dates'
        value={dates}
        onChange={setDates}
        minDate={new Date()}
      />
      <Stepper label='guest' value={guests} onChange={setGuests} />
      <Button onClick={handleSubmit} data-testid='listing-filters-submit'>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default memo(ListingFilters);
