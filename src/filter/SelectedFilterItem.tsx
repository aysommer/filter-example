import type { InsideFilterItemType } from './types'
import React from 'react'
import { CloseIcon } from '../icons'
import Select from './Select'
import NumberEntry from './NumberEntry'

type SelectedFilterItemProps = Pick<InsideFilterItemType, 'settings' | 'text'> & {
   onHideItem(): void
}

const SelectedFilterItem: React.FC<SelectedFilterItemProps> = ({
   settings,
   text,
   onHideItem
}) => {
   return (
      <div className='filter-item_selected'>
         <div>{text}</div>
         <div className='filter-item_selected-contollers'>
            {
               (settings.kind === 'numberEntry') ? (
                  <NumberEntry {...settings} />
               ) : (settings.kind === 'select') ? (
                  <Select {...settings} />
               ) : null
            }
            <CloseIcon width={16} height={16} onClick={onHideItem} />
         </div>
      </div>
   )
}

export default SelectedFilterItem