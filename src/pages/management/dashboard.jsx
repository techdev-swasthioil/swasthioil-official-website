import React from 'react';
import { Typography } from '@mui/material';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard_container'>
      <div className='title_container'>
        <Typography component='div'>Dashboard</Typography>
      </div>
    </div>
  )
}

export default Dashboard