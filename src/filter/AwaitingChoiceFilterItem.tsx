import React from 'react'
import { Button } from '../button'

type AwaitingChoiceFilterItemProps = {
   onShowItem(): void;
   text: string;
}

const AwaitingChoiceFilterItem: React.FC<AwaitingChoiceFilterItemProps> = ({
   onShowItem,
   text
}) => {
   return (
      <Button onClick={onShowItem}>
         {text}
      </Button>
   )
}

export default AwaitingChoiceFilterItem;