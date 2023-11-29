import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';


//IMPORT TABLE
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

const invoiceType = [
    {
        value: 'Credit',
        label: 'CREDIT',
    },
    {
        value: 'Cash',
        label: 'CASH',
    },

];


const salesReps = [
    {
        value: '1',
        label: 'Harshana'
    }
    ,
    {
        value: '2',
        label: 'Kasun'
    }
    ,
    {
        value: '3',
        label: 'Nimal'
    }
];


const currencies = [
    {
        value: 'USD',
        label: 'USD'
    },
    {
        value: 'LKR',
        label: 'LKR'
    }
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#03396c',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const sampleData = [
    { id: 1, itemCode: 'ABC123', itemDesc: 'Sample Item 1', qty: 5, unitPrice: 10, amount: 50 },
    { id: 2, itemCode: 'DEF456', itemDesc: 'Sample Item 2', qty: 3, unitPrice: 15, amount: 45 },
    { id: 3, itemCode: 'GHI789', itemDesc: 'Sample Item 3', qty: 2, unitPrice: 20, amount: 40 },
];




function AddInvoice() {


    return (
        <>


            <div style={{ border: '1px solid #AAB7B8', boxShadow: '5px 5px 5px #AAB7B8', borderRadius: '5px', marginBottom: '5px', paddingLeft: '10px' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        SALES
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        INVOICE
                    </Link>
                    <Typography color="text.primary">ADD INVOICE</Typography>
                </Breadcrumbs>
            </div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <div style={{ border: '1px solid #AAB7B8', boxShadow: '10px 10px 20px #AAB7B8', borderRadius: '5px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', marginBottom: '15px', marginTop: '15px' }}>

                    <Typography variant="h6" gutterBottom>
                        CUSTOMER DETAILS
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"
                                label="Customer Name"
                                type="text"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"
                                label="Customer Address"
                                type="text"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"
                                label="Customer Phone"
                                type="text"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"
                                label="Customer Phone"
                                type="text"
                                size="small"
                            />
                        </Grid>
                    </Grid>


                </div>
                <div style={{ border: '1px solid #AAB7B8', boxShadow: '10px 10px 20px #AAB7B8', borderRadius: '5px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', marginBottom: '15px', marginTop: '15px' }}>
                    <Typography variant="h6" paddingTop={'15pt'} gutterBottom>
                        INVOICE DETAILS
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"
                                helperText="Please select Invoice date"
                                type="date"
                                defaultValue={new Date()}
                                size="small"
                            // label="Select Invoice Date"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="--INVOICE TYPE--"

                                helperText="Please select your currency"
                                size="small"
                            >
                                {invoiceType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="--SALES REP--"
                                helperText="Select Sales Rep"
                                size="small"
                            >
                                {salesReps.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="outlined-password-input"

                                select
                                label="--CURRENCY--"
                                helperText="Select Currency Type"

                                size="small"
                            >


                                {currencies.map((options) => (
                                    <MenuItem key={options.value} value={options.value}>
                                        {options.label}
                                    </MenuItem>

                                ))}
                            </TextField>
                        </Grid>
                    </Grid>

                </div>
                <div style={{ border: '1px solid #AAB7B8', boxShadow: '10px 10px 20px #AAB7B8', borderRadius: '5px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', marginBottom: '15px', marginTop: '10px' }}>

                    <Typography variant="h6" paddingTop={'15pt'} gutterBottom>
                        ITEMS DETAILS
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="item-name-input"
                                label="Item Name"
                                select
                                size="small"
                                width="700"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="item-price-input"
                                label="Item Price"

                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="qty-inhand-input"
                                label="Qty In Hand"
                                type="text"
                                size="small"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id=""
                                label="Invoiced Qty"
                                type="text"
                                size="small"
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={10} sm={10} md={11}>
                            <div style={{ textAlign: 'right' }}>
                                <Button variant="contained">Add To List</Button>
                            </div>
                        </Grid>
                    </Grid>


                </div>





                <Typography variant="h6" paddingTop={'15pt'} gutterBottom>
                    ITEM LIST
                </Typography>


                <TableContainer component={Paper}>
                    <Table xs={12} sm={4} md={3} aria-label="customized table">
                        <TableHead>
                            <TableRow>



                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell align="right">ITEM CODE</StyledTableCell>
                                <StyledTableCell align="right">ITEM DESC</StyledTableCell>
                                <StyledTableCell align="right">QTY</StyledTableCell>
                                <StyledTableCell align="right">UNIT PRICE</StyledTableCell>
                                <StyledTableCell align="right">AMOUNT</StyledTableCell>
                                <StyledTableCell align="right">ACTION</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {sampleData.map((row) => (
                                <TableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.itemCode}</StyledTableCell>
                                    <StyledTableCell align="right">{row.itemDesc}</StyledTableCell>
                                    <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                    <StyledTableCell align="right">{row.unitPrice}</StyledTableCell>
                                    <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                    <StyledTableCell align="right"> <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton></StyledTableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid container spacing={2}>
                    <Grid item xs={10} sm={10} md={12}>
                        <div style={{ textAlign: 'right', paddingTop: '15pt' }}>

                            <Button variant="contained" style={{ marginRight: '50px', backgroundColor: 'red' }}>CANCELL</Button>

                            <Button variant="contained">SUBMIT</Button>


                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );


}
export default AddInvoice;

