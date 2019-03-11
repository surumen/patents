import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import '../assets/main.css';


class Charts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="distribution">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4"><h3 className="xsmall bt">Data Summary</h3><span id="location">Patent Status Distribution</span></div>
            <div className="col-lg-4"><h3 className="xsmall bt">Distribution by Assignee(s)</h3>
              <span id="blcount">
               
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Charts;





// const ChartContainer = () => {
//   const hidden = { visible: false };
//   const applicantsBands = [{
//       from: 0, to: 5, color: '#e62325', opacity: 1
//   }, {
//       from: 0, to: 5, color: '#ffc000', opacity: 1
//   }, {
//       from: 0, to: 5, color: '#37b400', opacity: 1
//   }, {
//       from: 0, to: 5, color: '#5392ff', opacity: 1
//   }];
//   const assigneeBands = [{
//       from: 0, to: 5, color: '#ccc', opacity: .6
//   }, {
//       from: 0, to: 5, color: '#ccc', opacity: .3
//   }];
//   const inventorBands = [{
//       from: 0, to: 5, color: '#ccc', opacity: .6
//   }, {
//       from: 0, to: 5, color: '#ccc', opacity: .3
//   }];
//   const applicants = [[25, 22]];
//   const assignees = [[45, 60]];
//   const inventors = [[750, 762]];

//   const tooltipRender = ({ point }) => {
//     const { value } = point;

//     return (
//       <span>
//         Maximum: { value.target }
//         <br />
//         Average: { value.current }
//       </span>
//     )
//   };


// <Chart style={{ height: 120 }} >
//   <ChartTitle text="Number of Applicants" />
//   <ChartSeries>
//       <ChartSeriesItem type="bullet" color="#fff" data={applicants} />
//   </ChartSeries>
//   <ChartCategoryAxis>
//     <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
//   </ChartCategoryAxis>
//   <ChartValueAxis>
//     <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={-10} max={45} plotBands={applicantsPlotBands} />
//   </ChartValueAxis>
//   <ChartTooltip render={tooltipRender} />
// </Chart>

// <Chart style={{ height: 120 }}>
//   <ChartTitle text="Number of Assignees" />
//     <ChartSeries>
//         <ChartSeriesItem type="bullet" color="#0058e9" data={hum} />
//     </ChartSeries>
//     <ChartCategoryAxis>
//       <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
//     </ChartCategoryAxis>
//     <ChartValueAxis>
//       <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={0} max={100} plotBands={humPlotBands} />
//     </ChartValueAxis>
//     <ChartTooltip render={tooltipRender} />
// </Chart>

// <Chart style={{ height: 120 }}>
//     <ChartTitle text="Number of Inventors" />
//     <ChartSeries>
//         <ChartSeriesItem type="bullet" color="#111" data={mmhg} />
//     </ChartSeries>
//     <ChartCategoryAxis>
//       <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
//     </ChartCategoryAxis>
//     <ChartValueAxis>
//       <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={715} max={795} plotBands={mmhgPlotBands} />
//     </ChartValueAxis>
//     <ChartTooltip render={tooltipRender} />
// </Chart>