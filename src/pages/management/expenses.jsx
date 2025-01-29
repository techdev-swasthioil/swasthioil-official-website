import React from 'react';
import { Typography } from '@mui/material';
import './expenses.scss';

function Expenses() {
  return (
    <div className='expenses_container'>
      <div className='title_container'>
        <Typography component='div'>Expense Management</Typography>
      </div>
    </div>
  )
}

export default Expenses