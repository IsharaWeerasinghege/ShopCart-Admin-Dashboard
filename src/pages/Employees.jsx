import React from 'react';
import {Header} from "../componets";
import {
  ColumnDirective,
  ColumnsDirective,
  Search,
  GridComponent, Page, Toolbar
} from "@syncfusion/ej2-react-grids";
import {employeesData, employeesGrid} from "../data/dummy";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";

const Employees = () => {
  return (
      <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-3xl">
        <Header title="Employees" category="Page"/>
        <GridComponent
            dataSource={employeesData}
            allowPaging
            allowSorting
            width="auto"
            toolbar={['Search']}
        >
          <ColumnsDirective>
            {employeesGrid?.map((item, index) => (
                <ColumnDirective key={index} {...item}/>
            ))}
          </ColumnsDirective>
          <Inject services={[ Page, Search, Toolbar ]} />
        </GridComponent>
      </div>
  )
}

export default Employees;