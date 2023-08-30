import React, { useCallback, useState } from 'react';
import FilterIcon from '../icons/FilterIcon';
import FilterPanel from './FilterPanel';
import { FilterProps } from './types';

const Filter: React.FC<FilterProps> = ({
   items = [],
   width,
   headerText = ''
}) => {
   const [showPanel, setShowPanel] = useState(false);

   const toggleShowPanel = useCallback(() => {
      setShowPanel((oldValue) => !oldValue);
   }, []);

   return (
      (!showPanel) ? (
         <FilterIcon
            width={24}
            height={24}
            onClick={toggleShowPanel}
         />
      ) : (
         <FilterPanel
            items={items}
            width={width}
            headerText={headerText}
            toggleShowPanel={toggleShowPanel}
         />
      )
   )
}

export default Filter;