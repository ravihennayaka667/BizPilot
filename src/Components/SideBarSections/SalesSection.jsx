
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


import { faTruck, faUser, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import addInvoice from '../../Pages/Invoice/addInvoice';


export default function SalesSection() {

 //sales dropdown  handle

 const [openSales, setopenSales] = React.useState(false);

 const handleClickSales = () => {
     setopenSales(!openSales);
 };


 // invoice dropdown handle

 const [openInvoice, setOpenInvoice] = React.useState(false);

 const handleClickInvoice = () => {
     setOpenInvoice(!openInvoice);
 };

 // handle the customers dropdown

 const [openCustomers, setopenCustomers] = React.useState(false);

 const handleClickCustomers = () => {
     setopenCustomers(!openCustomers);
 };


    return (
        <>
            <ListItemButton onClick={handleClickSales} id='ListItmBtn'>
                <ListItemIcon>
                    <FontAwesomeIcon id='icon' icon={faTruck} size='lg' />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Sales</Typography>} />
                {openSales ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSales} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickInvoice} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faFile} size='xs' />
                        </ListItemIcon>
                    
                        <ListItemText primary={<Typography variant="body2">Invoice</Typography>} />
                        {openInvoice ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openInvoice} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>


                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to="/invoiceAdd">

                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                                
                                <ListItemText primary={<Typography variant="body2">Add Invoice</Typography>} />

                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to="/invoiceView">
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                               
                                <ListItemText primary={<Typography variant="body2">View Invoice</Typography>} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>


                {/* customers section   */}

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickCustomers} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faUser} size='xs' />
                        </ListItemIcon>
                        
                        <ListItemText primary={<Typography variant="body2">Customers</Typography>} />
                        {openCustomers ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCustomers} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to='/addCustomers'>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                               
                                <ListItemText primary={<Typography variant="body2">Add Customers</Typography>} />

                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to ='/viewCustomers'>
                                
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                               
                                <ListItemText primary={<Typography variant="body2">View Customers</Typography>} />

                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>

            </Collapse>
        </>
    )
}