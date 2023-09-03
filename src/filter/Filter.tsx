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

function getDefaultState(items: FilterItemType[]): InsideFilterItemType[] {
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
   const [_items, _setItems] = useState(getDefaultState(items));

   const toggleShowPanel = useCallback(() => {
      setShowPanel((oldValue) => !oldValue);
   }, []);

   const resetFilter = useCallback(() => {
      _setItems((oldValue) => oldValue.map((item) => ({
         ...item,
         status: 'awaitingСhoice'
      })))
   }, [])

   return (
      <>
         <IconButton onClick={toggleShowPanel}>
            <FilterIcon width={20} height={20} />
         </IconButton>
         {(showPanel) ? (
            <Suspense fallback={<></>}>
               <FilterPanel
                  items={_items}
                  setItems={_setItems}
                  width={width}
                  headerText={headerText}
                  toggleShowPanel={toggleShowPanel}
                  resetFilter={resetFilter}
               />
            </Suspense >
         ) : null}
      </>
   )
}

export default Filter;