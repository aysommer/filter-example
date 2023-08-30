import type { FilterProps } from './types';
import React, { CSSProperties, useMemo } from 'react';
import CloseIcon from '../icons/CloseIcon';
import FilterItem from './FilterItem';

const STYLES: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   borderRadius: '16px',
   padding: '16px',
   background: 'white',
   boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

const HEADER_STYLES: CSSProperties = {
   fontWeight: 600,
   marginBottom: '16px',
   display: 'flex',
   justifyContent: 'space-between'
};

type FilterPanelProps = FilterProps & {
   toggleShowPanel(): void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
   items,
   width,
   headerText,
   toggleShowPanel
}) => {
   const computedStyles = useMemo(() => ({
      ...STYLES,
      width: `${width}px`
   }), [width]);

   return (
      <section
         style={computedStyles}>
         <section style={HEADER_STYLES}>
            <section>
               {headerText}
            </section>
            <CloseIcon
               width={20}
               height={20}
               onClick={toggleShowPanel}
            />
         </section>
         <section>
            {items.map((item) => <FilterItem key={item.id} {...item}/>)}
         </section>
      </section>
   )
};

export default FilterPanel;