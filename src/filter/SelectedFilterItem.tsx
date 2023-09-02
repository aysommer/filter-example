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
      <section className='filter-item_selected'>
         <div>{text}</div>
         <section className='filter-item_selected-contollers'>
            {
               (settings.kind === 'numberEntry') ? (
                  <NumberEntry
                     min={settings.min}
                     max={settings.max}
                  />
               ) : (settings.kind === 'select') ? (
                  <Select
                     items={settings.items}
                  />
               ) : null
            }
            <CloseIcon width={16} height={16} onClick={onHideItem} />
         </section>
      </section>
   )
}

export default SelectedFilterItem