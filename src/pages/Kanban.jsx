import React from 'react';
import {Header} from "../componets";
import {ColumnDirective, ColumnsDirective, KanbanComponent} from "@syncfusion/ej2-react-kanban";
import {kanbanData, kanbanGrid} from "../data/dummy";

const Kanban = () => {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header title="Kanban" category="App"/>
        <KanbanComponent
          id="Kanban"
          dataSource={kanbanData}
          cardSettings={{contentField: 'Summary', headerField: 'Id'}}
          keyField="Status"
        >
          <ColumnsDirective>
            {kanbanGrid?.map((item, index) => (
                <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
  )
}

export default Kanban;