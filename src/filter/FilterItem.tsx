import type { InsideFilterItemType, NumberEntrySettings, SelectSettings } from './types';
import React from 'react'

import './FilterItem.css';

type FilterItemProps = InsideFilterItemType & {
   setItems: React.Dispatch<React.SetStateAction<InsideFilterItemType[]>>;
};

type SelectedFilterItem = {
   title: string;
   onHide(): void;
};

type NumberEntryProps = Omit<NumberEntrySettings, 'kind'> & SelectedFilterItem;

type SelectProps = Omit<SelectSettings, 'kind'> & SelectedFilterItem;

const NumberEntry: React.FC<NumberEntryProps> = ({
   title,
   min,
   max,
   onHide
}) => {
   return (
      <div>
         <div>{title}</div>
         <input className='number-entry' type="number" min={min} max={max} defaultValue={min} />
         <span onClick={onHide}>x</span>
      </div>
   )
};

const Select: React.FC<SelectProps> = ({
   title,
   items = [],
   onHide
}) => {
   return (
      <div>
         <div>{title}</div>
         <select className='select'>
            {items.map((item) => (
               <option
                  key={item.value}
                  value={item.value}>
                  {item.text}
               </option>
            ))}
         </select>
         <span onClick={onHide}>x</span>
      </div>
   )
}

const FilterItem: React.FC<FilterItemProps> = ({
   id,
   text,
   status,
   settings,
   setItems
}) => {
   const handleShowItem = () => {
      setItems((oldItems) => oldItems.map((item) => {
         return (item.id === id) ? {
            ...item,
            status: 'selected'
         } : item
      }));
   }
   const handleHideItem = () => {
      setItems((oldItems) => oldItems.map((item) => {
         return (item.id === id) ? {
            ...item,
            status: 'awaitingСhoice'
         } : item
      }));
   }

   return (
      (status === 'awaitingСhoice') ? (
         <button className='filter-item' onClick={handleShowItem}>
            {text}
         </button>
      ) : (status === 'selected') ? (
         (settings.kind === 'numberEntry') ? (
            <NumberEntry
               min={settings.min}
               max={settings.max}
               title={text}
               onHide={handleHideItem} />
         ) : (settings.kind === 'select') ? (
            <Select
               title={text}
               items={settings.items}
               onHide={handleHideItem} />
         ) : null
      ) : null
   );
}

export default FilterItem;