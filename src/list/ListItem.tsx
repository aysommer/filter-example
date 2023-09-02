import type { ListItemType } from './types';
import React from 'react';

import './ListItem.css';

type ListItemProps = ListItemType;

const ListItem: React.FC<ListItemProps> = React.memo(({ value }) => {
   return (
      <div className='list-item'>
         {value}
      </div>
   )
});

export default ListItem;