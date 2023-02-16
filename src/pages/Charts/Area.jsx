import React from 'react';
import {Header} from "../../componets";
import {areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from "../../data/dummy";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";
import {
    ChartComponent,
    DateTime,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {useStateContext} from "../../contexts/ContextProvider";

const Area = () => {
    const {currentMode, textStyle} = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Header title="Area" category="Chart"/>
            <div className="mx-auto max-w-[880px]">
                <ChartComponent
                    id="area-chart"
                    height="400px"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{border: {width: 0}}}
                    legendSettings={{textStyle: textStyle}}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[SplineAreaSeries, Legend, DateTime]}/>
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item, index) =>
                            <SeriesDirective key={index} {...item} animation={{enable: true}}/>
                        )}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Area;