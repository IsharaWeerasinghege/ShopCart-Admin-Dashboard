import React from 'react';

import {ordersData, ordersGrid} from "../data/dummy";
import {Header} from "../componets";
import {
    ColumnDirective,
    ColumnsDirective,
    ContextMenu,
    Edit,
    ExcelExport,
    Filter,
    GridComponent,
    Page,
    PdfExport,
    Resize,
    Sort
} from "@syncfusion/ej2-react-grids";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";

const Order = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-3xl">
            <Header title="Orders" category="Page"/>
            <GridComponent
                id="grid-comp"
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport, Page]}/>
            </GridComponent>
        </div>
    )
}

export default Order;