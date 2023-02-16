import React from 'react';
import {Header} from "../../componets";
import {
    AccumulationChartComponent,
    AccumulationDataLabel,
    AccumulationLegend,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationTooltip,
    PieSeries
} from "@syncfusion/ej2-react-charts";
import {useStateContext} from "../../contexts/ContextProvider";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";
import {pieChartData} from "../../data/dummy";

const Pie = () => {
    const {currentMode, textStyle} = useStateContext();
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Header title="Pie" category="Chart"/>
            <div className="mx-auto max-w-[880px]">
                <AccumulationChartComponent
                    id="pie-chart"
                    height="full"
                    legendSettings={{visible: true, textStyle: textStyle}}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    tooltip={{enable: true}}
                >
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            name="Sale"
                            dataSource={pieChartData}
                            xName="x"
                            yName="y"
                            innerRadius="40%"
                            startAngle={0}
                            endAngle={360}
                            radius="70%"
                            explode
                            explodeOffset="10%"
                            explodeIndex={2}
                            dataLabel={{
                                visible: true,
                                name: 'text',
                                position: 'Inside',
                                font: {
                                    fontWeight: '600',
                                    color: '#fff',
                                },
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    )
}

export default Pie;