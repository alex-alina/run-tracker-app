import React, { PureComponent } from 'react';
import Chart from "chart.js";
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
    const myCanvas = this.chartRef.current.getContext("2d");
    const { runs } = this.props;
    
    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myCanvas, {
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
                max: 160,
                // replace max with goal plus 10km
                // max: findMax(runs, "distance") 
              },
            }
          ]
        },
        responsive: true,
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
            label: 'Time (min)',
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
    });
  }

  render() {
    return (
      <div>
        <canvas  
          id="myRunsChart" 
          ref={this.chartRef} 
          aria-label="Line chart that shows km run for each running session" 
          role="img" 
        >
          <p>We can't display the graph. Your browser does not support the canvas element.</p>
        </canvas>
      </div>
    );
  }
};

export default LineGraph;