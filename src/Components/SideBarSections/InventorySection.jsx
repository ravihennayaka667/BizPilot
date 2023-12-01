import React from "react";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from '@mui/material/Typography';
import { faPieChart, faFolder, faFileText } from "@fortawesome/free-solid-svg-icons";



export default function InventorySection() {

    // handle the inventory Dropdown

    const [openInventory, setopenInventory] = React.useState(false);

    const handleClickInventory = () => {
        setopenInventory(!openInventory);
    };


    const [openDelivery, setopenDelivery] = React.useState(false);

    const handleClickDelivery = () => {
        setopenDelivery(!openDelivery);
    };


    const [openReceipts, setopenReceipts] = React.useState(false);

    const handleClickReceipts = () => {
        setopenReceipts(!openReceipts);
    };




    return (
        <>
            <ListItemButton onClick={handleClickInventory} id='ListItmBtn'>
                <ListItemIcon>
                    <FontAwesomeIcon id='icon' icon={faPieChart} size='lg' />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Inventory</Typography>} />
                {openInventory ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openInventory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickDelivery} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faFolder} size='sm' />
                        </ListItemIcon>
                       
                        <ListItemText primary={<Typography variant="body2">Delivery Note</Typography>} />
                        {openDelivery ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openDelivery} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                        
                                <ListItemText primary={<Typography variant="body2">Add Delivery Note</Typography>} />

                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                               
                                <ListItemText primary={<Typography variant="body2">View Delivery Note</Typography>} />

                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>


                {/* Receipt section   */}

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickReceipts} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faFileText} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Receipt(s)" />
                        {openReceipts ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openReceipts} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                               
                                <ListItemText primary={<Typography variant="body2">View Receipts</Typography>} />

                            </ListItemButton>

                        </List>
                    </Collapse>
                </List>

            </Collapse>
        </>

    );
}