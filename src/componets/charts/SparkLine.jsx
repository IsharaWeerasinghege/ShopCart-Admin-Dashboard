import React from 'react';
import {SparklineComponent, SparklineTooltip} from "@syncfusion/ej2-react-charts";
import {Inject} from "@syncfusion/ej2-react-richtexteditor";

const SparkLine = ({id, currentColor, color, data, width, height}) => {
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={2}
            valueType="Numeric"
            fill={color}
            border={{color: currentColor, width: 2}}
            dataSource={data}
            xName='xval'
            yName='yval'
            tooltipSettings={{
                visible: true,
                format: 'x : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{visible: ['All'], size: 2.5, fill: currentColor}}
        >
            <Inject services={[SparklineTooltip]}/>
        </SparklineComponent>
    )
}

export default SparkLine;