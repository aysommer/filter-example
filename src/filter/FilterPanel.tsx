import type { FilterProps, InsideFilterItemType } from './types';
import React, { useMemo } from 'react';
import CloseIcon from '../icons/CloseIcon';
import FilterItem from './FilterItem';
import { IconButton } from '../iconButton';

import './FilterPanel.css';

type FilterPanelProps = FilterProps<InsideFilterItemType> & {
   toggleShowPanel(): void;
   setItems: React.Dispatch<React.SetStateAction<InsideFilterItemType[]>>;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
   items,
   setItems,
   width,
   headerText,
   toggleShowPanel
}) => {
   const computedStyles = useMemo(() => ({
      width: `${width}px`
   }), [width]);

   const selectedChoiceItems = items.filter((item) => item.status === 'selected');
   const awaitingChoiceItems = items.filter((item) => item.status === 'awaitingСhoice');

   return (
      <section
         className='filter-panel'
         style={computedStyles}>
         <section className='filter-panel__header'>
            <section>
               {headerText}
            </section>
            <IconButton onClick={toggleShowPanel}>
               <CloseIcon />
            </IconButton>
         </section>
         <section className='filter-panel__selected-block'>
            {
               (selectedChoiceItems.length > 0) ? (
                  <>
                     <div className='filter-panel__selected-title'>Selected now</div>
                     {selectedChoiceItems.map((item) => (
                        <FilterItem
                           key={item.id}
                           setItems={setItems}
                           {...item}
                        />
                     ))}
                  </>
               ) : (
                  <span>Nothing selected</span>
               )
            }
         </section>
         {
            (awaitingChoiceItems.length > 0) ? (
               <section className='filter-panel__awaiting-choice-block'>
                  {awaitingChoiceItems.map((item) => (
                     <FilterItem
                        key={item.id}
                        setItems={setItems}
                        {...item}
                     />
                  ))}
               </section>
            ) : null
         }
      </section>
   )
};

export default FilterPanel;