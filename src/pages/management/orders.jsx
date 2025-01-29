import { Button, Typography, Paper, Box, TextField, Chip, Autocomplete, IconButton } from '@mui/material';
//imports for the table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//imports for the tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import View from '@mui/icons-material/Description';
import { useState } from 'react';
import { React } from 'react';
import './orders.scss';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='table_panel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//Status chips
function getStatusChip(status) {
  let chipStyle = {};

  switch (status) {
    case 'In Process':
      chipStyle = { backgroundColor: '#d47a7a46', color: '#000' };
      break;
    case 'Delivered':
      chipStyle = { backgroundColor: '#e1f0f2f1', color: '#000' }; // Custom green
      break;
    default:
      chipStyle = { backgroundColor: '#bdbdbd', color: '#000' }; // Default gray
  }

  return <Chip label={status} sx={chipStyle} />;
}

function OrderTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell>Order ID</TableCell> */}
            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align='right'>Amount</TableCell>
            <TableCell align='center'>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order.id}>
                {/* <TableCell>{order.id}</TableCell> */}
                <TableCell>{order.name}</TableCell>
                <TableCell>{getStatusChip(order.status)}</TableCell>
                <TableCell align='right'>{order.amount}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='contained'
                  >
                    <View />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">No orders found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

OrderTable.propTypes = {
  orders: PropTypes.array.isRequired,
};


function Orders() {
  const [addOrder, setAddOrder] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const [inputSelectValue, setInputSelectValue] = useState("");
  const [productsList, setProductsList] = useState([{ id: 1, product: "", quantity: "" }]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchQuery(''); // Reset search on tab change
  };

  // Sample order data
  const orders = [
    { id: 1, name: 'Laksmi Venkatesh', status: 'In Process', amount: '10000' },
    { id: 2, name: 'Ramachandra Stores', status: 'In Process', amount: '12000' },
    { id: 3, name: 'Mahadevi', status: 'Delivered', amount: '15000' },
    { id: 4, name: 'Laksmi Venkatesh', status: 'In Process', amount: '2500' },
    { id: 5, name: 'Sai Palace', status: 'Delivered', amount: '43000' },
  ];

  const customers = ['Lakshmi Venkatesh', 'Ramachandra Stores', 'Sai Palace', 'Mahadevi'];
  const products = ['Coconut Oil 1L Bottle', 'Coconut Oil 0.5L Bottle', 'Coconut Oil 1L Pouch', 'Coconut Oil 0.5L Pouch', 'Coconut Oil 5L Can', 'Pooja Oil 1L Bottle', 'Pooja Oil 0.5L Bottle', 'Pooja Oil 1L Pouch', 'Pooja Oil 0.5L Pouch', 'Tilamshu 0.5L Pouch'];

  // Function to add a product field

  const addProductField = () => {
    setProductsList([...productsList, { id: productsList.length + 1, product: "", quantity: "" }]);
  };

  // Function to delete a product field
  const deleteProductField = (index) => {
    const updatedList = productsList.filter((_, i) => i !== index);
    setProductsList(updatedList.map((item, newIndex) => ({ ...item, id: newIndex + 1 })));
  };

  // Filter orders based on the search query
  const filteredOrders = orders.filter(
    (order) =>
      (value === 0 || order.status === (value === 1 ? 'In Process' : 'Delivered')) &&
      order.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='orders_container'>
      <div className='title_container'>
        <Typography component='div'>Manage Orders</Typography>
        <div className='add_order-button'>
          <Button
            variant="contained"
            onClick={(e) => {
              setAddOrder(!addOrder)
              if (showOrder) {
                setShowOrder(!showOrder);
              }
            }
            }
          >
            New order <AddIcon />
          </Button>
        </div>
      </div>
      <div className={`add_order ${addOrder ? "show" : "hide"}`}>
        <Typography component="div">Add a new order</Typography>

        {/* Customer Selection */}
        <div className="customer_selector">
          <Typography component="div">Customer Name :</Typography>
          <Autocomplete
            freeSolo
            options={customers}
            value={selectValue}
            inputValue={inputSelectValue}
            onInputChange={(event, newInputValue) => setInputSelectValue(newInputValue)}
            onChange={(event, newValue) => setSelectValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select Customer" variant="outlined" />
            )}
          />
        </div>

        {/* Product Selection */}
        <div className="product_selection">
          <Typography component="div">Products :</Typography>
          <div className="headers_prompt">
            <Typography className="item_name">Item Name</Typography>
            <Typography className="quantity">Quantity</Typography>
          </div>

          {productsList.map((item, index) => (
            <div key={item.id} className="fields">
              <Typography>{index + 1}.</Typography>
              <Autocomplete
                freeSolo
                options={products}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Product" variant="outlined" />
                )}
              />
              <TextField type="number" variant="outlined" id={`quantity-${index}`} />
              <IconButton
                onClick={() => deleteProductField(index)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
          {/* Add Product Button */}
          <div className="adder_button">
            <IconButton onClick={addProductField}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        {/* Submit Button */}
        <Button 
        variant="contained"
        className='add'
        onClick={()=>{
          setAddOrder(false);
        }}>
          Add
        </Button>
      </div>
      <div className={`order_details ${showOrder ? 'show' : 'hide'}`}>
        <Typography component='div'>
          Edit order
        </Typography>
        <div className='fields'>
          <TextField
            label="order Id"
            variant="outlined"
            id='order-id'
            value={'SWT-1'}
            disabled
            slotprops={{
              inputLabel: {
                shrink: true,
              },
            }} />
          <TextField label="order Name" variant="outlined" id='order-name'></TextField>
          <TextField
            id="outlined-number"
            label="Current price"
            type="number"
            slotprops={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={300}
            disabled
          />
          <TextField label="Enter new price" variant="outlined" id='stock'></TextField>
        </div>
        <Button
          variant="contained"
          onClick={() =>
            setShowOrder(!showOrder)}
        >
          Submit
        </Button>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab label="All Orders" {...a11yProps(0)} />
          <Tab label="In Process" {...a11yProps(1)} />
          <Tab label="Delivered" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* Search Field */}
      <Box p={2}>
        <TextField
          label="Search Orders"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      <div className='table_container'>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <CustomTabPanel value={value} index={0}>
            <OrderTable orders={filteredOrders} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <OrderTable orders={filteredOrders} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <OrderTable orders={filteredOrders} />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  )
}

export default Orders;