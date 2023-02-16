import React from 'react';
import {Header} from "../../componets";
import {
    Category,
    ChartComponent,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    StackingColumnSeries,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

const Stacked = () => {
    const {currentMode, textStyle} = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Header title="Line" category="Chart"/>
            <div className="mx-auto max-w-[880px]">
                <ChartComponent
                    height='full'
                    width="100%"
                    id="stacked-chart"
                    primaryXAxis={stackedPrimaryXAxis}
                    primaryYAxis={stackedPrimaryYAxis}
                    tooltip={{enable: true}}
                    chartArea={{border: {width: 0}}}
                    legendSettings={{textStyle: textStyle}}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
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
            </div>
        </div>
    )
}

export default Stacked;