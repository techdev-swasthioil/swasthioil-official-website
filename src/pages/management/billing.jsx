import React, { useState, useEffect } from 'react';
import { Box, Button, ButtonGroup, Fade, Typography, TextField, Autocomplete, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../../assets/images/Swasthi-brand-logo.png'
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './billing.scss';

function Billing() {
  const [mode, setMode] = useState("Sales"); // "sales" or "purchase"
  const [selectValue, setSelectValue] = useState("");
  const [inputSelectValue, setInputSelectValue] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [productsList, setProductsList] = useState([{ id: 1, product: "", quantity: "", price: "" }]);

  //fetching customers comes here
  const customers = [
    { name: "Direct customer", address: "N/A"},
    { name: "Lakshmi Venkatesh", oldBalance: 8000, address: "Katapady - 57102" },
    { name: "Ramachandra Stores", oldBalance: 14000, address: "Pangala - 576122" },
    { name: "Sai Palace", oldBalance: 112000, address: "Hampankatta, Mangalore - 56019" },
    { name: "Mahadevi", oldBalance: 29000, address: "Katapady" },
    { name: "Ravi Kiran Stores", oldBalance: 0, address: "Car Street, Udupi - 576101" },
    { name: "Ramnath Traders", oldBalance: 0, address: "#29-A, Jigni, Bangalore - 467019" },
  ];

  //fetching products comes here
  const products = ['Coconut Oil 1L Bottle', 'Coconut Oil 0.5L Bottle', 'Coconut Oil 1L Pouch',
    'Coconut Oil 0.5L Pouch', 'Coconut Oil 5L Can', 'Edible Copra',
    'Coconut Oil','Coconut Cake','Pooja Oil 1L Bottle', 'Pooja Oil 0.5L Bottle',
    'Pooja Oil 1L Pouch', 'Pooja Oil 0.5L Pouch', 'Tilamshu 0.5L Pouch'];

  const purchaseItems = ['Copra G-I', 'Copra G-II', 'Coconut'];

  // Orders Data
  const orders = [
    { customerName: "Lakshmi Venkatesh", orderId: "ORD001", products: [{ name: "Coconut Oil 1L Bottle", quantity: 20 }, { name: "Coconut Oil 5L Can", quantity: 5 }] },
    { customerName: "Lakshmi Venkatesh", orderId: "ORD002", products: [{ name: "Coconut Oil 0.5L Bottle", quantity: 20 }] },
    { customerName: "Ramachandra Stores", orderId: "ORD003", products: [{ name: "Coconut Oil 1L Bottle", quantity: 50 }] },
    { customerName: "Sai Palace", orderId: "ORD004", products: [{ name: "Copra", quantity: 25 }, { name: "Coconut Oil", quantity: 100 }] }
  ];
  // Handle Customer Selection
  const handleCustomerChange = (event, newValue) => {
    setSelectValue(newValue || null);
    setSelectedOrderId(null);
    setProductsList([{ id: 1, product: "", quantity: "", price: "" }]); // Reset products if customer changes
  };

  // Handle Order ID Selection
  const handleOrderChange = (event, newOrderId) => {
    setSelectedOrderId(newOrderId);
    const selectedOrder = orders.find(order => order.orderId === newOrderId);

    if (selectedOrder) {
      setProductsList(selectedOrder.products.map((product, index) => ({
        id: index,
        product: product.name,
        quantity: product.quantity,
        price: "", // Assuming price needs to be entered manually
      })));
    }
  };

  // Handle Manual Product Change
  const handleProductChange = (index, field, value) => {
    const newProductsList = [...productsList];
    newProductsList[index][field] = value;
    setProductsList(newProductsList);
  };

  const addProductField = () => {
    setProductsList([...productsList, { id: productsList.length + 1, product: "", quantity: "", price: "" }]);
  };

  const deleteProductField = (index) => {
    const updatedList = productsList.filter((_, i) => i !== index);
    setProductsList(updatedList.map((item, newIndex) => ({ ...item, id: newIndex + 1 })));
  };

  const handleDownload = () => {
    if (!pdfData || !selectValue) {
      alert("No PDF data available or customer not selected");
      return;
    }

    // Convert data URI to byte array
    const byteString = atob(pdfData.split(",")[1]);
    const mimeString = pdfData.split(",")[0].split(":")[1].split(";")[0];

    // Create an array buffer
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // Create Blob from the byte array
    const blob = new Blob([ab], { type: mimeString });

    // Create a Blob URL
    const blobUrl = URL.createObjectURL(blob);

    // Define the filename using the customer's name and invoice number
    const invoiceNumber = "INV001"; // Replace dynamically if needed
    const fileName = `${selectValue.name.replace(/\s+/g, "_")}_${invoiceNumber}.pdf`;

    // Create and trigger the download link
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke the Blob URL to free memory
    URL.revokeObjectURL(blobUrl);
  };



  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.addImage(logo, "JPEG", 10, 10, 30, 30);
    doc.setFontSize(14);
    doc.setFont("Helvetica", "bold")
    doc.text("Sri Janardhana Oil & Flour Mills", 120, 15);
    doc.setFont("Helvetica", "normal")
    doc.setFontSize(12);
    doc.text("2-54A, Sarvamangala", 120, 20);
    doc.text("Pangala, Udupi dist - 576122", 120, 25);
    doc.text("Karnataka", 120, 30);
    doc.text("Ph no: +91 9483927749", 120, 35);
    doc.setFont("Helvetica", "bold");
    doc.text("GSTIN: 29AJJPB0081E1ZL", 120, 40);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(20);
    doc.text("Sales Invoice", 105, 60, { align: "center" });
    doc.line(10, 58, 80, 58);
    doc.line(130, 58, 200, 58);
    doc.setFontSize(12);
    doc.text("Bill To,", 10, 70)
    doc.setFont("Helvetica", "bold");
    doc.text(`${selectValue ? selectValue.name : "N/A"}`, 10, 75);
    doc.setFont("Helvetica", "normal");

    //displaying the customer adress
    const address = selectValue ? selectValue.address : "N/A";

    doc.text(`${address}`, 10, 80);

    //function to get the today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB");

    doc.text(`Date : ${formattedDate}`, 150, 70);
    doc.text(`Invoice no. :`, 150, 75);

    const oldBalanceDue = selectValue ? selectValue.oldBalance || 0 : 0;

    // Calculate subtotal
    const subTotal = productsList.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const totalBalanceDue = subTotal + oldBalanceDue;

    doc.autoTable({
      startY: 90,
      head: [["#", "Product", "Qty", "Price", "Total"]],
      body: productsList.map((item, index) => [
        index + 1,
        item.product || "N/A",
        item.quantity || "0",
        `${(item.price * 1).toFixed(2)}`,
        `${(item.quantity * item.price).toFixed(2)}`
      ]),
      theme: "grid",
      headStyles: { fillColor: "#076274", textColor: "ffffff", fontStyle: "normal" }, // Custom table header color
      styles: { fontSize: 12 }
    });


    // Get final Y position after the table
    const finalY = doc.autoTable.previous.finalY + 10;

    doc.text("Sub Total", 120, finalY);
    doc.text(`: Rs.${subTotal.toFixed(2)}`, 165, finalY, { align: "justify" })
    doc.text("Old Balance Due", 120, finalY + 6,);
    doc.text(`: Rs.${oldBalanceDue}` || "N/A", 165, finalY + 6, { align: "justify" });
    doc.setFontSize(13);
    doc.setFont("Helvetica", "bold");
    doc.text("Total Balance Due", 120, finalY + 12);
    doc.text(`: Rs.${totalBalanceDue.toFixed(2)}`, 165, finalY + 12, { align: "justify" });

    // Manager's signature
    doc.setFontSize(12);
    doc.text("Manager's Signature", 35, 280 );
    doc.line(25, 270, 90, 270); // Horizontal line

    // Customer's signature
    doc.text("Customer's Signature", 125, 280 );
    doc.line(115, 270, 180, 270); // Horizontal line


    const pdfBlob = doc.output("datauristring");
    setPdfData(pdfBlob);
  };

  return (
    <div className='billing_container'>
      <div className='title_container'>
        <Typography component='div'>{mode} Billing</Typography>
        <div className='mode_switch'>
          <ButtonGroup>
            <Button className={`switch ${mode === 'Sales' ? 'on' : 'off'}`} variant='contained' onClick={() => setMode("Sales")}>
              Sales
            </Button>
            <Button className={`switch ${mode === 'Purchase' ? 'on' : 'off'}`} variant='contained' onClick={() => setMode("Purchase")}>
              Purchase
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className='sales_container'>
        <Fade in={mode === "Sales"}>
          <Box display={mode === "Sales" ? "flex" : "none"}>
            <div className='invoice_inputs'>
              <div className="customer_selector">
                <Typography component="div">Customer Name :</Typography>
                <Autocomplete
                  freeSolo
                  options={customers}
                  getOptionLabel={(option) => (option ? option.name : "")} // Ensure it doesn't break on null
                  value={selectValue}
                  inputValue={inputSelectValue}
                  onInputChange={(event, newInputValue) => setInputSelectValue(newInputValue)}
                  onChange={handleCustomerChange} // Prevents error on clearing
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Customer" variant="outlined" />
                  )}
                />
              </div>
              {/* Order ID Selection - Appears only if there are orders for the selected customer */}
              {selectValue && orders.some(order => order.customerName === selectValue.name) && (
                <div className="order_selector">
                  <Typography component='div'>Order ID :</Typography>
                  <Autocomplete
                    freeSolo
                    options={orders.filter(order => order.customerName === selectValue.name).map(order => order.orderId)}
                    value={selectedOrderId}
                    onChange={handleOrderChange}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select Order ID" variant="outlined" />
                    )}
                  />
                </div>
              )}

              <div className="product_selection">
                <Typography component="div">Products :</Typography>
                <div className="headers_prompt">
                  <Typography className="item_name">Item</Typography>
                  <Typography className="quantity">Qty</Typography>
                  <Typography className="price">Price</Typography>
                </div>

                {productsList.map((item, index) => (
                  <div key={item.id} className="fields">
                    <Typography>{index + 1}.</Typography>
                    <Autocomplete
                      freeSolo
                      options={products}
                      value={item.product}
                      onChange={(event, newValue) => handleProductChange(index, "product", newValue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select Product" variant="outlined" />
                      )}
                    />
                    <TextField variant="outlined" id={`quantity-${index}`} value={item.quantity} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} />
                    <TextField variant="outlined" id={`price-${index}`} value={item.price} onChange={(e) => handleProductChange(index, "price", e.target.value)} />
                    <IconButton onClick={() => deleteProductField(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                ))}
                <div className="adder_button">
                  <IconButton onClick={addProductField}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
              <div className='generate_button'>
                <Button
                  variant='contained'
                  onClick={() => generatePDF()}
                >
                  Generate Bill
                </Button>
              </div>
            </div>
            <div className='invoice_preview'>
              {pdfData && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={pdfData} />
                </Worker>
              )}
              <div className='invoice_actions'>
                <div className='confirm_bill'>
                  <Button variant='contained'>
                    Confirm bill
                  </Button>
                </div>
                <div className='download_bill'>
                  <Button variant='contained' onClick={handleDownload}>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
        {/* Purchase Content */}
        <Fade in={mode === "Purchase"}>
          <Box mt={3} display={mode === "Purchase" ? "flex" : "none"}>
            <div className="purchase_container">
              <div className="product_selection">
                <Typography component="div">Products :</Typography>
                <div className="headers_prompt">
                  <Typography className="item_name">Item</Typography>
                  <Typography className="quantity">Qty</Typography>
                  <Typography className="price">Price</Typography>
                </div>

                {productsList.map((item, index) => (
                  <div key={item.id} className="fields">
                    <Typography>{index + 1}.</Typography>
                    <Autocomplete
                      freeSolo
                      options={purchaseItems}
                      value={item.product}
                      onChange={(event, newValue) => handleProductChange(index, "product", newValue)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select Product" variant="outlined" />
                      )}
                    />
                    <TextField variant="outlined" id={`quantity-${index}`} value={item.quantity} onChange={(e) => handleProductChange(index, "quantity", e.target.value)} />
                    <TextField variant="outlined" id={`price-${index}`} value={item.price} onChange={(e) => handleProductChange(index, "price", e.target.value)} />
                    <IconButton onClick={() => deleteProductField(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                ))}
                <div className="adder_button">
                  <IconButton onClick={addProductField}>
                    <AddIcon />
                  </IconButton>
                </div>
                <div className='confirm_purchase'>
                <Button variant='contained'>
                  Confirm bill
                </Button>
              </div>
              </div>
            </div>
          </Box>
        </Fade>
      </div>
    </div>
  );
}

export default Billing;
