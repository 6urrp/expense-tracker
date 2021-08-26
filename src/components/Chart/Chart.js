import "./Chart.css"

import ChartBar from "./ChartBar"

const Chart = props => {
    const valueArray = props.dataPoints.map(data => data.value);
    const maximum = Math.max(...valueArray)

    return (
        <div className="chart">
            {props.dataPoints.map(data => 
                <ChartBar
                    key={data.label} 
                    value={data.value} 
                    maxValue={maximum} 
                    label={data.label} /> )}
        </div>
    )
}

export default Chart;