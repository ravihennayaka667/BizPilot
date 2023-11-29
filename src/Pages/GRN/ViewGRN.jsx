
import React from 'react';
import { TextField , Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import {Typography} from '@mui/material';



export default function ViewGRN() {

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
    


    return (
        <>
        
        <div style={{ border: '1px solid #AAB7B8', boxShadow: '5px 5px 5px #AAB7B8', borderRadius: '5px', marginBottom: '5px', paddingLeft: '10px' }}>
      

                <Breadcrumbs aria-label="breadcrumb">
           
                    <Link underline="hover" color="inherit" href="/">
                        GRN
                    </Link>
                   
                    <Typography color="text.primary">VIEW GRN</Typography>
                </Breadcrumbs>
            </div>

        <div style={{marginTop:'20px'}}>
            <TextField id="outlined-basic" label="--GRN NO--" variant="outlined" size='small' /> 
           <Button variant="contained" style={{marginLeft:'10px'}}>Search</Button>

        </div>
        
        <div style={{paddingTop:'40px'}}>
        <TableContainer component={Paper}>
                    <Table xs={12} sm={6} md={3} aria-label="customized table">
                        <TableHead>
                            <TableRow>



                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell align="right">GRN code</StyledTableCell>
                                <StyledTableCell align="right">GRN Ammount</StyledTableCell>
                                <StyledTableCell align="right">GRN QTY</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                               
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
                </TableContainer>

        </div>
        </>
    );

}