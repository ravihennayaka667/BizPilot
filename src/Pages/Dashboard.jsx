import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';

const data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        'purple',
        'orange'
      ],
      borderColor: [
        'darkred',
        'darkblue',
        'gold',
        'darkgreen',
        'indigo',
        'darkorange'
      ],
      borderWidth: 1
    }
  ]
};

const data2 = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow'
      ],
      borderColor: [
        'darkred',
        'darkblue',
        'gold'
      ],
      borderWidth: 1
    }
  ]
};

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card sx={{ width: '500px', height: '500px' }}>
        <CardContent sx={{ height: '450px' }}>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Typography>
          <Bar data={data1} />
        </CardContent>
      </Card>
      <Card sx={{ width: '500px', height: '500px' }}>
        <CardContent sx={{ height: '450px' }}>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Typography>
          <Line data={data2} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;