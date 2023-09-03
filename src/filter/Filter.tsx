import React, {
   useCallback,
   useState,
   lazy,
   Suspense
} from 'react';
import { IconButton } from '../iconButton';
import { FilterIcon } from '../icons';
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
   const [panelVisibility, setPanelVisibility] = useState(false);
   const [_items, _setItems] = useState(getDefaultState(items));

   const showPanel = useCallback(() => {
      setPanelVisibility(true);
   }, []);

   const hidePanel = useCallback(() => {
      setPanelVisibility(false);
   }, []);

   const saveFilter = useCallback(() => {
      setPanelVisibility(false);
   }, []);

   const resetFilter = useCallback(() => {
      _setItems((oldValue) => oldValue.map((item) => ({
         ...item,
         status: 'awaitingСhoice'
      })))
   }, [])

   return (
      <>
         <IconButton onClick={showPanel}>
            <FilterIcon width={20} height={20} />
         </IconButton>
         {(panelVisibility) ? (
            <Suspense fallback={<></>}>
               <FilterPanel
                  items={_items}
                  setItems={_setItems}
                  width={width}
                  headerText={headerText}
                  hidePanel={hidePanel}
                  saveFilter={saveFilter}
                  resetFilter={resetFilter}
               />
            </Suspense >
         ) : null}
      </>
   )
}

export default Filter;