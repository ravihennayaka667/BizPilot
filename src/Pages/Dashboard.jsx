import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import Chart from 'chart.js/auto';


const Dashboard = () => {
  const stockData = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
      {
        label: 'Stock Prices',
        data: [500, 1500, 2000, 3300, 3500],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: ['1 week ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 3500],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Card style={{ width: '500px' ,height:'500px' }}>
      <CardContent>
        <Typography variant="h5">Stock Prices</Typography>
        <Bar data={stockData} />
      </CardContent>
    </Card>
    <Card style={{ width: '500px' ,height:'500px', marginLeft:'30px'  }}>
      <CardContent>
        <Typography variant="h5">Sales</Typography>
        <Line data={salesData} />
      </CardContent>
    </Card>
  </div>
  );
};

export default Dashboard;