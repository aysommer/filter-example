import { Filter, FilterItemType } from './filter';
import { List, ListItemType } from './list';

import './App.css';

const EMPLOYEE_FILTER_ITEMS: FilterItemType[] = [{
   id: 'age',
   text: 'Age',
   settings: {
      kind: 'numberEntry',
      min: 18,
      max: 65
   }
}, {
   id: 'position',
   text: 'Position',
   settings: {
      kind: 'select',
      items: [{
         value: 'doctor',
         text: 'Doctor'
      }, {
         value: 'driver',
         text: 'Driver'
      }]
   }
}];

const POSITIONS: ListItemType[] = [{
   id: crypto.randomUUID(),
   value: 'Human 1'
},{
   id: crypto.randomUUID(),
   value: 'Human 2'
},{
   id: crypto.randomUUID(),
   value: 'Human 3'
},{
   id: crypto.randomUUID(),
   value: 'Human 4'
}];

function App() {
   return (
      <main>
         <Filter
            items={EMPLOYEE_FILTER_ITEMS}
            width={400}
            headerText='Employees'
         />
         <List items={POSITIONS} />
      </main>
   )
}

export default App
