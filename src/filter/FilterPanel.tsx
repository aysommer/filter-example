import type { FilterProps, InsideFilterItemType } from './types';
import React, { useMemo } from 'react';
import CloseIcon from '../icons/CloseIcon';
import FilterItem from './FilterItem';
import { IconButton } from '../iconButton';

import './FilterPanel.css';
import { Button } from '../button';

type FilterPanelProps = FilterProps<InsideFilterItemType> & {
   toggleShowPanel(): void;
   resetFilter(): void;
   setItems: React.Dispatch<React.SetStateAction<InsideFilterItemType[]>>;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
   items,
   setItems,
   width,
   headerText,
   toggleShowPanel,
   resetFilter
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
            <section className='filter-panel__header-buttons'>
               {
                  (selectedChoiceItems.length > 0) ? (
                     <Button onClick={resetFilter}>Reset</Button>
                  ) : null
               }
               <IconButton onClick={toggleShowPanel}>
                  <CloseIcon width={20} height={20} />
               </IconButton>
            </section>
         </section>
         <section className='filter-panel__selected-block'>
            {
               (selectedChoiceItems.length > 0) ? (
                  <>
                     <div className='filter-panel__selected-title'>Selected now</div>
                     <section>
                        {selectedChoiceItems.map((item) => <FilterItem key={item.id} setItems={setItems} {...item} />)}
                     </section>
                  </>
               ) : (
                  <span>Nothing selected</span>
               )
            }
         </section>
         {
            (awaitingChoiceItems.length > 0) ? (
               <>
                  <section className='filter-panel__awaiting-choice-block'>
                     <div className='filter-panel__awaiting-choice-title'>Can select</div>
                     <section className='filter-panel__awaiting-choice-item'>
                        {awaitingChoiceItems.map((item) => <FilterItem key={item.id} setItems={setItems} {...item} />)}
                     </section>
                  </section>
               </>
            ) : null
         }
      </section>
   )
};

export default FilterPanel;