import React from 'react';
import { Typography } from '@mui/material';
import './inventory.scss';

function Inventory() {
  return (
    <div className='inventory_container'>
      <div className='title_container'>
        <Typography component='div'>Inventory Management</Typography>
      </div>
    </div>
  )
}

export default Inventory