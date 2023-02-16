import React from 'react';
import {Header} from "../../componets";
import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";
import {
    Category,
    ChartComponent,
    ColumnSeries,
    DataLabel,
    Legend,
    SeriesCollectionDirective, SeriesDirective,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";

const Bar = () => {
    const {currentMode, textStyle} = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Header title="Bar" category="Chart"/>
            <div className="mx-auto max-w-[880px]">
                <ChartComponent
                    id="charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{border: {width: 0}}}
                    tooltip={{enable: true}}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{textStyle: textStyle}}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Bar;