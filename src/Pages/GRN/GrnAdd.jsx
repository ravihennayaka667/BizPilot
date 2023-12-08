import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";
import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { TableRow, IconButton, Paper, Table, TableHead, TableBody } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { Card, CardHeader , CardContent } from "@mui/material";


export default function GrnAdd() {


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

          <Typography color="text.primary">ADD GRN</Typography>
        </Breadcrumbs>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Card style={{ marginBottom: '15px', marginTop: '15px' }}>
          <CardHeader id='cardHeader'
            title={
              <Typography id='CardTitle' variant="h9" gutterBottom>
                GRN DETAILS
              </Typography>

            }

          />
          <CardContent>


          <Grid container spacing={2}>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="Sup_name"
                label="Supplier Name"
                type="text"
                size="small"
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="outlined-password-input"
                helperText="Please select Invoice date"
                type="date"
                defaultValue={new Date()}
                size="small"
                style={{ width: "90%" }}
              />
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="PO_No"
                label="PO No"
                type="text"
                size="small"
                style={{ display: "flex", alignContent: "right" }}
              />
            </Grid>
          </Grid>
          </CardContent>
        </Card>




        <Card style={{ marginBottom: '15px', marginTop: '15px' }}>
          <CardHeader id='cardHeader'
            title={
              <Typography id='CardTitle' variant="h9" gutterBottom>
              ADD GRN
            </Typography>

            }

          />
          <CardContent></CardContent>

    

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="outlined-select-item"
                select
                label="--ITEM NAME--"

                helperText="Please select your item"
                size="small"
              >

              </TextField>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="itm_code"
                label="Item Code"
                type="text"
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="Current_stock"
                label="Current Stock"
                type="text"
                size="small"
              />
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="current_stock_value"
                label="Current Stock Value"
                type="text"
                size="small"
              />
            </Grid>





          </Grid>


          <Grid container spacing={2}>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="GRN_Qty"
                label="GRN Qty"
                type="text"
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="GRN_Item_val"
                label="GRN Item Value"
                type="text"
                size="small"
              />
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="Total_GRN_Val"
                label="Total GRN Value"
                type="text"
                size="small"
              />
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <Button variant="contained" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%", marginLeft: "30px" }}>ADD TO LIST</Button>
            </Grid>


          </Grid>
       </Card>
       


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