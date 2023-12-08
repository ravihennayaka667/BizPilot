
import React from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

import fakeData from '../../Components/MOCK_DATA.json';
import { useTable } from 'react-table';
import '../../assets/Table.css';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function InvoiceView() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#03396c',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));


    // const sampleData = [
    //     { id: 1, itemCode: 'ABC123', itemDesc: 'Sample Item 1', qty: 5, unitPrice: 10, amount: 50 },
    //     { id: 2, itemCode: 'DEF456', itemDesc: 'Sample Item 2', qty: 3, unitPrice: 15, amount: 45 },
    //     { id: 3, itemCode: 'GHI789', itemDesc: 'Sample Item 3', qty: 2, unitPrice: 20, amount: 40 },
    // ];



    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: "id"

        },
        {
            Header: "First Name",
            accessor: "first_name",
        },
        {
            Header: "Last Name",
            accessor: "last_name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Gender",
            accessor: "gender",
        },
        {
            Header: "University",
            accessor: "university",
        },
    ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });


    return (
        <>
            <Container fixed>

                {/* <div style={{ border: '1px solid #AAB7B8', boxShadow: '5px 5px 5px #AAB7B8', borderRadius: '5px', marginBottom: '0px', paddingLeft: '10px' }}> */}


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
                    <Typography color="text.primary">VIEW INVOICE</Typography>
                </Breadcrumbs>
                {/* </div> */}

                <div style={{ marginTop: '20px' }}>
                    <TextField id="outlined-basic" label="--INVOICE NO--" variant="outlined" size='small' />
                    <Button id='search_button' variant="contained" style={{ marginLeft: '10px', backgroundColor:'#7b2cbf'}}>Search</Button>

                </div>



                
                
                    
                    <TableContainer component={Paper} style={{marginTop:'50px'}}>
                        <Table {...getTableProps()} sx={{ minWidth: 650 }}>
                            <TableHead style={{backgroundColor:'#5a1891'}}>
                                {headerGroups.map((headerGroup) => (
                                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <TableCell style={{color:'white' , fontWeight:'bold' , fontSize:'16px'}} {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHead>
                            <TableBody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <TableRow {...row.getRowProps()}>
                                            {row.cells.map((cell) => (
                                                <TableCell {...cell.getCellProps()}> {cell.render("Cell")} </TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
       



            {/* <TableContainer >
                        <Table xs={12} sm={6} md={3} aria-label="customized table" >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>#</StyledTableCell>
                                    <StyledTableCell align="right" style={{ width: '200px' }}>Invoice code</StyledTableCell>
                                    <StyledTableCell align="right" style={{ width: '200px' }}>Invoice Ammount</StyledTableCell>
                                    <StyledTableCell align="right" style={{ width: '200px' }}>Invoiced QTY</StyledTableCell>
                                    <StyledTableCell align="right" style={{ width: '200px' }}>Action</StyledTableCell>

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
                                        <StyledTableCell align="right"> <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton></StyledTableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer> */}


        </Container >

        </>
    );

}