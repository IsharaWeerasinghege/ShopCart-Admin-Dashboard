import React from 'react';
import {
    ChartComponent,
    DateTime,
    Legend,
    LineSeries,
    SeriesCollectionDirective, SeriesDirective,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";
import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

const LineChart = () => {
    const {currentMode, textStyle} = useStateContext();
  return (
    <ChartComponent
        id="line-chart"
        height="400px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        legendSettings={{textStyle: textStyle}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
        <Inject services={[LineSeries, Legend, Tooltip, DateTime]}/>
        <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) =>
                <SeriesDirective key={index} {...item}  animation={{enable: true}}/>
            )}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart;