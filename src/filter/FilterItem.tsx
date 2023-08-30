import type { FilterItemType } from './types';
import React, { CSSProperties } from 'react'

const FILTER_ITEM_STYLES: CSSProperties = {
   backgroundColor: '#CCCCCC',
   borderRadius: '16px',
   border: 'none',
   padding: '4px 8px',
};

type FilterItemProps = FilterItemType;

const FilterItem: React.FC<FilterItemProps> = ({ text }) => {
   return (
      <button style={FILTER_ITEM_STYLES}>
         {text}
      </button>
   )
}

export default FilterItem