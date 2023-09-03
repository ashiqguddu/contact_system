 

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Cases', 'Deaths', 'Recovered', 'Active'],
          datasets: [
            {
              label: 'Count',
              data: [
                data.cases,
                data.deaths,
                data.recovered,
                data.active
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Cases
                'rgba(75, 192, 192, 0.2)', // Deaths
                'rgba(54, 162, 235, 0.2)', // Recovered
                'rgba(255, 205, 86, 0.2)' // Active
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)'
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div>
        <h2 className='text-center bg-info text-dark border border-dark rounded-2 fw-bolder'>CHarts and maps</h2>
        <div className="container" >
            <h1 style={{color:'GrayText'}}>World deaths </h1>
        <canvas ref={chartRef} width={400} height={200}></canvas>
        </div>
        
      
    </div>
  );
};

export default ChartComponent;

