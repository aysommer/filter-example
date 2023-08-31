import { Filter, FilterItemType } from './filter';

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

function App() {
   return (
      <main>
         <Filter
            items={EMPLOYEE_FILTER_ITEMS}
            width={300}
            headerText='Employees'
         />
      </main>
   )
}

export default App
