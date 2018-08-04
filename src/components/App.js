import React from 'react';
import EmployeeTable from './EmployeeTable/EmployeeTable';
import SearchForm from './SearchForm/SearchForm';
import FilterButtonForm from './FilterButtonForm/FilterButtonForm';
import SortButtonForm from './SortButtonForm/SortButtonForm';
import OpenAddButton from './OpenAddButton/OpenAddButton';
import EmployeeTree from './EmployeeTree/EmployeeTree';
import Clock from './Clock/Clock';
import { row, col } from '../constants/bootstrapClass';

export default function App() {
  return (
    <div className={row}>
      <div className={`${col.xs[12]} ${col.sm[12]} ${col.md[8]} ${col.lg[8]}`}>
        <EmployeeTable />       
      </div>
      <div className={`${col.xs[12]} ${col.sm[7]} ${col.md[4]} ${col.lg[4]} functions`}>     
        <Clock />
        <SearchForm />
        <FilterButtonForm />
        <SortButtonForm />
        <EmployeeTree />
        <OpenAddButton />
      </div>
    </div>
  );
}
