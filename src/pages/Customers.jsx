import React from 'react';
import {Header} from "../componets";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Search,
  Toolbar,
  Selection,
  Edit, Sort, Filter
} from "@syncfusion/ej2-react-grids";
import {customersData, customersGrid} from "../data/dummy";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";

const Customers = () => {
  return (
      <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-3xl">
        <Header title="Customers" category="Page"/>
        <GridComponent
            dataSource={customersData}
            allowPaging
            allowSorting
            width="auto"
            toolbar={['Delete', 'Update', 'Cancel']}
            editSettings={{allowEditing: true, allowAdding: true, allowDeleting: true}}
        >
          <ColumnsDirective>
            {customersGrid?.map((item, index) => (
                <ColumnDirective key={index} {...item}/>
            ))}
          </ColumnsDirective>
          <Inject services={[ Page, Search, Toolbar, Selection, Edit, Sort, Filter ]} />
        </GridComponent>
      </div>
  )
}

export default Customers;