import React, { PureComponent } from 'react';
import Chart from "chart.js";
import { findMax } from '../../helpers/findMax';
let myLineChart;

class LineGraph extends PureComponent {
  chartRef = React.createRef();

  componentDidUpdate() {
    this.buildChart();
  }
  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const myCharteRef = this.chartRef.current.getContext("2d");
    const { runs, color } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    new Chart(myCharteRef, {
      type: 'line',
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              },
              gridLines: {
                display: false,
                drawBorder: false
              }

            }
          ],
          yAxes: [
            {
              // type: 'kilometers',
              ticks: {
                min: 0,
                // max: 140,
                // replace max with goal plus 10km
                max: findMax(runs, "distance") 

              },
            }
          ]
        },
        responsive: true,
        // maintainAspectRatio: false,
      },
      
      data: {
        labels: runs.map(run => run.date),
        datasets: [
          {
            label: 'Km',
            data: runs.map(run => run.distance),
            backgroundColor: color,
            borderColor: color,
            fill: 'none',
            pointRadius: 4,
            borderWidth: 2,
            tension: 0.2,
          },

          // {
          //   label: 'Time',
          //   data: runs.map(run => run.duration),
          //   backgroundColor: 'orange',
          //   borderColor: 'orange',
          //   fill: 'none',
          //   pointRadius: 4,
          //   borderWidth: 2,
          //   tension: 0.2,
          // },
        ]
      }
      // 
    });
  }

  render() {
    return (
      <canvas  id="myChart" ref={this.chartRef}/>
    );
  }
};


export default LineGraph;