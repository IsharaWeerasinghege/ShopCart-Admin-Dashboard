import React from 'react';
import {
    Category,
    ChartComponent,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    StackingColumnSeries,
    Tooltip
} from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";

const Stacked = ({width, height}) => {
    return (
        <ChartComponent
            width={width}
            height={height}
            id="stacked-chart"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            tooltip={{enable: true}}
            chartArea={{border: {width: 0}}}
            legendSettings={{background: 'white'}}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]}/>
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => (
                    <SeriesDirective
                        key={index}
                        dataSource={item.dataSource}
                        xName="x"
                        yName="y"
                        name={item.name}
                        type="StackingColumn"
                        tooltip={{visible: true, format: '${point.x} : ${point.y}'}}
                        border={{width: 2, color: 'white'}}
                    />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked;