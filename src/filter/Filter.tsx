import React, {
   useCallback,
   useState,
   lazy,
   Suspense
} from 'react';
import { IconButton } from '../iconButton';
import FilterIcon from '../icons/FilterIcon';
import {
   FilterItemType,
   FilterProps,
   InsideFilterItemType
} from './types';

const FilterPanel = lazy(() => import('./FilterPanel'));

function getFilterState(items: FilterItemType[]): InsideFilterItemType[] {
   return items.map((item) => ({
      ...item,
      status: 'awaitingСhoice'
   }));
}

const Filter: React.FC<FilterProps<FilterItemType>> = ({
   items = [],
   width,
   headerText = ''
}) => {
   const [showPanel, setShowPanel] = useState(false);
   const [_items, _setItems] = useState(getFilterState(items));

   const toggleShowPanel = useCallback(() => {
      setShowPanel((oldValue) => !oldValue);
   }, []);

   return (
      (!showPanel) ? (
         <IconButton onClick={toggleShowPanel}>
            <FilterIcon />
         </IconButton>
      ) : (
         <Suspense fallback={<></>}>
            <FilterPanel
               items={_items}
               setItems={_setItems}
               width={width}
               headerText={headerText}
               toggleShowPanel={toggleShowPanel}
            />
         </Suspense>
      )
   )
}

export default Filter;