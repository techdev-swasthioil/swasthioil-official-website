import { Button, Typography, Paper, Box, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/DriveFileRenameOutline';
import { useState } from 'react';
import { React } from 'react';
import './productManagement.scss';

function ProductManagement() {
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample product data
  const products = [
    { id: 'SWT-01', name: 'Coconut Oil 1L Bottle', price: '300', stock: 10 },
    { id: 'SWT-02', name: 'Coconut Oil 0.5L Bottle', price: '160', stock: 5 },
    { id: 'SWT-03', name: 'Coconut Oil 1L Pouch', price: '290', stock: 0 },
    { id: 'SWT-04', name: 'Coconut Oil 0.5L Pouch', price: '145', stock: 20 },
    { id: 'SWT-05', name: 'Coconut Oil 5L Can', price: '1500', stock: 20 },
    { id: 'SWT-06', name: 'Pooja Oil 1L Bottle', price: '160', stock: 20 },
    { id: 'SWT-07', name: 'Pooja Oil 0.5L Bottle', price: '80', stock: 20 },
    { id: 'SWT-08', name: 'Pooja Oil 1L Pouch', price: '150', stock: 20 },
    { id: 'SWT-09', name: 'Pooja Oil 0.5L Pouch', price: '70', stock: 20 },
    { id: 'SWT-10', name: 'Tilamshu 0.5L Pouch', price: '300', stock: 20 },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='products_container'>
      <div className='title_container'>
        <Typography component='div'>Products</Typography>
        <div className='add_product-button'>
          <Button
            variant="contained"
            onClick={(e) => {
              setAddProduct(!addProduct)
              if (editProduct) {
                setEditProduct(!editProduct);
              }
            }
            }
          >
            Add Product <AddIcon />
          </Button>
        </div>
      </div>
      <div className={`add_product ${addProduct ? 'show' : 'hide'}`}>
        <Typography component='div'>
          Add a new product
        </Typography>
        <div className='fields'>
          <TextField label="Enter product name" variant="outlined" id='product-name' />
          <TextField label="Enter price" variant="outlined" id='price' />
          <TextField label="Enter initial stock" variant="outlined" id='stock' />
        </div>
        <Button
          variant="contained"
          onClick={() => setAddProduct(false)}
        >
          Submit
        </Button>
      </div>
      <div className={`edit_product ${editProduct ? 'show' : 'hide'}`}>
        <Typography component='div'>
          Edit product
        </Typography>
        <div className='fields'>
          <TextField
            label="Product Id"
            variant="outlined"
            id='product-id'
            value={'SWT-1'}
            disabled
            slotprops={{
              inputLabel: {
                shrink: true,
              },
            }} />
          <TextField label="Product Name" variant="outlined" id='product-name'></TextField>
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
            setEditProduct(!editProduct)}
        >
          Submit
        </Button>
      </div>
      <div className='table_container'>
        {/* Search Field */}
        <Box>
          <TextField
            label="Search Products"
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
                  <TableCell align='right'>Price</TableCell>
                  <TableCell align='right'>Stock</TableCell>
                  <TableCell align='center'>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell align='right'>{product.price}</TableCell>
                    <TableCell align='right'>{product.stock}</TableCell>
                    <TableCell align='center'>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setEditProduct(true);
                          if (addProduct) {
                            setAddProduct(!addProduct);
                          }
                        }}
                      >
                        <Edit />
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

export default ProductManagement;