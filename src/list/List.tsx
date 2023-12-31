import React from 'react'
import type { ListType } from './types';
import ListItem from './ListItem';

type ListProps = ListType;

const List: React.FC<ListProps> = ({
   items = []
}) => {
   return (
      <div>
         {items.map((item) => <ListItem key={item.id} {...item}/>)}
      </div>
   )
}

export default List