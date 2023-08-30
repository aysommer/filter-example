import { Filter, FilterItemType } from './filter';

import './App.css';

const EMPLOYEE_FILTER_ITEMS: FilterItemType[] = [{
   id: 'age',
   text: 'Возраст'
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
