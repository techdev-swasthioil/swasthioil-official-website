import { Button, Typography, Paper, Box, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import GetData from '@mui/icons-material/Description';
import { useState } from 'react';
import { React } from 'react';
import './customers.scss';

function Customers() {
  const [addCustomer, setAddCustomer] = useState(false);
  const [editCustomer, setEditCustomer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample customer data
  const customers = [
    { id: 'C1', name: "Lakshmi Venkatesh", credit: 5000, debit: 0 },
    { id: 'C2', name: "Ramachandra Stores", credit: 4000, debit: 0 },
    { id: 'C3', name: "Mahadevi", credit: 7000, debit: 0 },
    { id: 'C4', name: "RaviKiran Stores", credit: 0, debit: 500 },
    { id: 'C5', name: "Ramnath Traders", credit: 2000, debit: 0 },
    { id: 'C6', name: "Harish Hotel", credit: 0, debit: 1500 },
    { id: 'C7', name: "Sai Palace", credit: 119000, debit: 0 },
  ];

  // Filter customers based on the search query
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='customers_container'>
      <div className='title_container'>
        <Typography component='div'>Customers</Typography>
        <div className='add_customer-button'>
          <Button
            variant="contained"
            onClick={(e) => {
              setAddCustomer(!addCustomer)
              if (editCustomer) {
                setEditCustomer(false);
              }
            }
            }
          >
            Add Customer <AddIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setEditCustomer(true);
              if (addCustomer) {
                setAddCustomer(false);
              }
            }}
          >
            Edit Customer <AddIcon />
          </Button>

        </div>
      </div>
      <div className={`add_customer ${addCustomer ? 'show' : 'hide'}`}>
        <Typography component='div'>
          Add a new customer
        </Typography>
        <div className='fields'>
          <TextField label="Enter customer name" variant="outlined" id='customer-name' />
          <TextField label="Enter phone number" variant="outlined" id='phone-number' />
          <TextField label="Enter address" variant="outlined" id='address' />
        </div>
        <Button
          variant="contained"
          onClick={() =>
            setAddCustomer(false)
          }
        >
          Submit
        </Button>
      </div>
      <div className={`edit_customer ${editCustomer ? 'show' : 'hide'}`}>
        <Typography component='div'>
          Edit customer
        </Typography>
        <div className='fields'>
          <TextField
            label="Customer Id"
            variant="outlined"
            id='customer-id'
            slotprops={{
              inputLabel: {
                shrink: true,
              },
            }} />
          <TextField label="Customer Name" variant="outlined" id='customer-name'></TextField>
          <TextField label="Phone no" variant="outlined" id='phone-number'></TextField>
          <TextField label="Customer address" variant="outlined" id='customer-address'></TextField>

        </div>
        <Button
          variant="contained"
          onClick={() => setEditCustomer(!editCustomer)}
        >
          Submit
        </Button>
      </div>
      <div className='table_container'>
        {/* Search Field */}
        <Box>
          <TextField
            label="Search customers"
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell className='credit' align='right'>Credit</TableCell>
                  <TableCell className='debit' align='right'>Debit</TableCell>
                  <TableCell align='center'>History</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell className='credit' align='right'>{customer.credit}</TableCell>
                    <TableCell className='debit' align='right'>{customer.debit}</TableCell>
                    <TableCell align='center'>
                      <Button
                        onClick={() => {
                          setEditCustomer(true);
                          if (addCustomer) {
                            setAddCustomer(false);
                          }
                        }}
                      >
                        <GetData />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  )
}

export default Customers;