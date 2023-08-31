import type { FilterStatus, InsideFilterItemType, NumberEntrySettings, SelectSettings } from './types';
import React, { memo, useCallback } from 'react'

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

const FilterItem: React.FC<FilterItemProps> = memo(({
   id,
   text,
   status,
   settings,
   setItems
}) => {
   const bindToggleAction = useCallback((status: FilterStatus) => () => {
      setItems((oldItems) => oldItems.map((item) => {
         return (item.id === id) ? {
            ...item,
            status
         } : item
      }));
   }, [id, setItems]);

   return (
      (status === 'awaitingСhoice') ? (
         <button className='filter-item' onClick={bindToggleAction('selected')}>
            {text}
         </button>
      ) : (status === 'selected') ? (
         (settings.kind === 'numberEntry') ? (
            <NumberEntry
               min={settings.min}
               max={settings.max}
               title={text}
               onHide={bindToggleAction('awaitingСhoice')} />
         ) : (settings.kind === 'select') ? (
            <Select
               title={text}
               items={settings.items}
               onHide={bindToggleAction('awaitingСhoice')} />
         ) : null
      ) : null
   );
});

export default FilterItem;