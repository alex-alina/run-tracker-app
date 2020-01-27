import React, { PureComponent } from 'react';
import Chart from "chart.js";
import { findMax } from '../../helpers/findMax';
import { formatDateToDDMMMY } from '../../helpers/dates';

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
              // type: 'time',
              // time: {
              //   unit: 'day',
              // },
              gridLines: {
                display: false,
                drawBorder: false
              }

            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 140,
                // replace max with goal plus 10km
                // max: findMax(runs, "distance") 

              },
            }
          ]
        },
        responsive: true,
        // maintainAspectRatio: false,
      },
      
      data: {
        labels: runs.map(run => formatDateToDDMMMY(run.date)),
        datasets: [
          {
            label: 'Km',
            data: runs.map(run => run.distance),
            backgroundColor: '#0277bd',
            borderColor: '#0277bd',
            fill: 'none',
            pointRadius: 4,
            borderWidth: 2,
            tension: 0.2,
          },

          {
            label: 'Time',
            data: runs.map(run => run.duration),
            backgroundColor: '#ffd24c',
            borderColor: '#ffd24c',
            fill: 'none',
            pointRadius: 4,
            borderWidth: 2,
            tension: 0.2,
          },
        ]
      }
      // 
    });
  }

  render() {
    return (
      <div>
        <canvas  id="myRunsChart" ref={this.chartRef} aria-label="Line chart that shows km run for each running session" role="img" >
          <p>Your browser does not support the canvas element.</p>
        </canvas>
      </div>
    );
  }
};


export default LineGraph;