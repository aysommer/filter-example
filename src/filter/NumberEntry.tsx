import type React from 'react';
import type { NumberEntrySettings } from './types';

import './NumberEntry.css';

type NumberEntryProps = Omit<NumberEntrySettings, 'kind'>;

const NumberEntry: React.FC<NumberEntryProps> = ({
   min,
   max
}) => {
   return (
      <input
         className='number-entry'
         type="number"
         min={min}
         max={max}
         defaultValue={min}
      />
   )
};

export default NumberEntry;