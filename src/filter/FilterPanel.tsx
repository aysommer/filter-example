import type { FilterProps, InsideFilterItemType } from './types';
import React, { useMemo } from 'react';
import { CloseIcon, DoneIcon } from '../icons';
import FilterItem from './FilterItem';
import { IconButton } from '../iconButton';
import { Button } from '../button';

import './FilterPanel.css';

type FilterPanelProps = FilterProps<InsideFilterItemType> & {
   hidePanel(): void;
   saveFilter(): void;
   resetFilter(): void;
   setHasChanges: React.Dispatch<React.SetStateAction<boolean>>;
   setItems: React.Dispatch<React.SetStateAction<InsideFilterItemType[]>>;
   hasChanges: boolean;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
   items,
   setHasChanges,
   setItems,
   width,
   headerText,
   hidePanel,
   saveFilter,
   resetFilter,
   hasChanges
}) => {
   const computedStyles = useMemo(() => ({
      width: `${width}px`
   }), [width]);

   const selectedChoiceItems = items.filter((item) => item.status === 'selected');
   const awaitingChoiceItems = items.filter((item) => item.status === 'awaitingСhoice');

   return (
      <div
         className='filter-panel'
         style={computedStyles}>
         <div className='filter-panel__header'>
            <div>
               {headerText}
            </div>
            <div className='filter-panel__header-buttons'>
               {
                  (selectedChoiceItems.length > 0) ? (
                     <Button onClick={resetFilter}>Reset</Button>
                  ) : null
               }
               {
                  (hasChanges) ? (
                     <IconButton onClick={saveFilter}>
                        <DoneIcon width={20} height={20} />
                     </IconButton>
                  ) : null
               }
               <IconButton onClick={hidePanel}>
                  <CloseIcon width={20} height={20} />
               </IconButton>
            </div>
         </div>
         <div className='filter-panel__selected-block'>
            {
               (selectedChoiceItems.length > 0) ? (
                  <>
                     <div className='filter-panel__selected-title'>Selected now</div>
                     <div>
                        {selectedChoiceItems.map((item) => (
                           <FilterItem
                              key={item.id}
                              setItems={setItems}
                              setHasChanges={setHasChanges}
                              {...item}
                           />
                        ))}
                     </div>
                  </>
               ) : (
                  <span>Nothing selected</span>
               )
            }
         </div>
         {
            (awaitingChoiceItems.length > 0) ? (
               <>
                  <div className='filter-panel__awaiting-choice-block'>
                     <div className='filter-panel__awaiting-choice-title'>Can select</div>
                     <div className='filter-panel__awaiting-choice-item'>
                        {awaitingChoiceItems.map((item) => (
                           <FilterItem
                              key={item.id}
                              setItems={setItems}
                              setHasChanges={setHasChanges}
                              {...item}
                           />
                        ))}
                     </div>
                  </div>
               </>
            ) : null
         }
      </div>
   )
};

export default FilterPanel;