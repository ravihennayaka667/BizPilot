import React from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ViewCustomers() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#03396c",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const sampleData = [
    {
      id: 1,
      CustCode: "ABC123",
      CustName: "Sample Item 1",
      CustAddress: 5,
      Contacts: 10,
      Status: 50,
    },
    {
      id: 1,
      CustCode: "ABC123",
      CustName: "Sample Item 1",
      CustAddress: 5,
      Contacts: 10,
      Status: 50,
    },
    {
      id: 1,
      CustCode: "ABC123",
      CustName: "Sample Item 1",
      CustAddress: 5,
      Contacts: 10,
      Status: 50,
    },
  ];

  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="--Nic NO--"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" style={{ marginLeft: "10px" }}>
          Search
        </Button>
      </div>

      <div style={{ paddingTop: "55px" }}>
        <TableContainer component={Paper}>
          <Table xs={12} sm={6} md={3} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="center">Customer code</StyledTableCell>
                <StyledTableCell align="center">Customer Name</StyledTableCell>
                <StyledTableCell align="center">
                  Customer Address
                </StyledTableCell>
                <StyledTableCell align="center">Contact Numbers</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.CustCode}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.CustName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.CustAddress}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Contacts}
                  </StyledTableCell>


                  <StyledTableCell align="center">
                    {" "}
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                   
                    <IconButton aria-label="Edit">
                      <EditIcon /> 
                    </IconButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
