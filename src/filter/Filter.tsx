import React, {
   useCallback,
   useState,
   lazy,
   Suspense,
   useMemo
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
      status: 'awaitingСhoice',
      selectedValue: null
   }));
}

const Filter: React.FC<FilterProps<FilterItemType>> = ({
   items = [],
   width,
   headerText = ''
}) => {
   const [panelVisibility, setPanelVisibility] = useState(false);
   const [hasChanges, setHasChanges] = useState(false);

   const [_items, _setItems] = useState(getDefaultState(items));

   const showPanel = useCallback(() => {
      setPanelVisibility(true);
   }, []);

   const hidePanel = useCallback(() => {
      setPanelVisibility(false);
   }, []);

   const saveFilter = useCallback(() => {
      setPanelVisibility(false);
      setHasChanges(false);
   }, []);

   const resetFilter = useCallback(() => {
      _setItems((oldValue) => oldValue.map((item) => ({
         ...item,
         status: 'awaitingСhoice'
      })))
      setHasChanges(true);
   }, [])

   const selectedFilterText = useMemo(() => {
      let value = _items.reduce((acc, item) => {
         if (item.status === 'selected') {
            return acc + item.text + ', ';
         }
         return acc;
      }, '').slice(0, -1);
      value = value.slice(0, -1);

      return value;
   }, [_items]);

   return (
      <div>
         <IconButton onClick={showPanel}>
            <FilterIcon width={20} height={20} />
         </IconButton>
         <span>
            {selectedFilterText}
         </span>
         {(panelVisibility) ? (
            <Suspense fallback={<></>}>
               <FilterPanel
                  items={_items}
                  hasChanges={hasChanges}
                  setItems={_setItems}
                  setHasChanges={setHasChanges}
                  width={width}
                  headerText={headerText}
                  hidePanel={hidePanel}
                  saveFilter={saveFilter}
                  resetFilter={resetFilter}
               />
            </Suspense >
         ) : null}
      </div>
   )
}

export default Filter;