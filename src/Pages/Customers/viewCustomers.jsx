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
import { useTable } from "react-table";
import { tableCellClasses } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


import fakeData from '../../Components/MOCK_DATA.json';
import '../../assets/MainTheme.css';    


export default function ViewCustomers() {
  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: "#03396c",
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));

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
      <div>
        <TextField
          id="outlined-basic"
          label="--Nic NO--"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" id="search_button" style={{ marginLeft: "10px",  }}>
          Search
        </Button>
      </div>

      <div style={{ paddingTop: "55px" }}>
      <TableContainer component={Paper} style={{marginTop:'50px'}}>
                        <Table {...getTableProps()} sx={{ minWidth: 650 }}>
                            <TableHead style={{backgroundColor:'#5a189a'}}>
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
      </div>
    </>
  );
}
