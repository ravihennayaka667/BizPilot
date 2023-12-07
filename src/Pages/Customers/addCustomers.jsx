import React from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';



import '../../assets/MainTheme.css';

export default function AddCustomers() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>

      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography  color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>


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
                PERSONAL DETAILS
              </Typography>
            }

          />
          <CardContent>

            <Typography id='CardTitle' variant="h9" gutterBottom>
              PERSONAL DETAILS
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="First_Name"
                  label="First Name"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="Last_Name"
                  label="Last Name"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="Address_Line_1"
                  label="Address Line 1"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="=Address_Line_2"
                  label="Address Line 2"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField id="City" label="City" type="text" size="small" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField id="Country" label="Country" type="text" size="small" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="Postal_Code"
                  label="Postal Code"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
            </CardContent>
                </Card>

                <Card style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <CardHeader id='cardHeader'
                        title={
                          <Typography id='CardTitle' variant="h9" paddingTop={"15pt"} gutterBottom>
                          CONTACTS DETAILS
                        </Typography>
          
                        }
                        
                    />
                    <CardContent>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    id="Land_Line_No"
                    label="Land Line No"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    id="Mobile_No"
                    label="Mobile No"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField id="Email" label="Email" type="Email" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField id="Fax_No" label="Fax No" type="text" size="small" />
                </Grid>
              </Grid>
              </CardContent>
                </Card>



            <Card style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <CardHeader id='cardHeader'
                        title={
                          <Typography id='CardTitle' variant="h9" paddingTop={"15pt"} gutterBottom>
                          OTHER DETAILS
                        </Typography>
                        }
                        
                    />
                    <CardContent>
              

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    id="Contact_Person_Name"
                    label="Contact Person  Name"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    id="Contact_person_Mobile_No"
                    label="Mobile No"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    id="Contact_person_Mobile_No"
                    label="Land No"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <label>Active Status</label>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Grid>
              </Grid>
              </CardContent>
                </Card>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={10} md={12}>
                <div style={{ textAlign: "right", paddingTop: "10pt" }}>
                  <Button
                    variant="contained"
                    style={{ marginRight: "50px", backgroundColor: "#d9534f" }}
                  >
                    CANCELL
                  </Button>

                  <Button variant="contained">SAVE</Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </>
        );
}
