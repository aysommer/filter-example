import type React from 'react';
import type { SelectSettings } from './types';

import './Select.css';

type SelectProps = Omit<SelectSettings, 'kind'>;

const Select: React.FC<SelectProps> = ({
   items = []
}) => {
   return (
      <select className='select'>
         {items.map((item) => (
            <option
               key={item.value}
               value={item.value}>
               {item.text}
            </option>
         ))}
      </select>
   );
};

export default Select;