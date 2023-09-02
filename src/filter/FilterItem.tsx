import type { InsideFilterItemType } from './types';
import React from 'react'
import AwaitingChoiceFilterItem from './AwaitingChoiceFilterItem';
import SelectedFilterItem from './SelectedFilterItem';

import './FilterItem.css';

type FilterItemProps = InsideFilterItemType & {
   setItems: React.Dispatch<React.SetStateAction<InsideFilterItemType[]>>;
};

const FilterItem: React.FC<FilterItemProps> = ({
   id,
   text,
   status,
   settings,
   setItems
}) => {
   const onShowItem = () => {
      setItems((oldItems) => oldItems.map((item) => {
         return (item.id === id) ? {
            ...item,
            status: 'selected'
         } : item
      }));
   }
   const onHideItem = () => {
      setItems((oldItems) => oldItems.map((item) => {
         return (item.id === id) ? {
            ...item,
            status: 'awaitingСhoice'
         } : item
      }));
   }

   return (
      (status === 'awaitingСhoice') ? (
         <AwaitingChoiceFilterItem
            onShowItem={onShowItem}
            text={text}
         />
      ) : (status === 'selected') ? (
         <SelectedFilterItem
            text={text}
            settings={settings}
            onHideItem={onHideItem}
         />
      ) : null
   );
}

export default FilterItem;