import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faList , faClipboard } from "@fortawesome/free-solid-svg-icons";

export default function B_ReportSection() {

    // handle the Reports dropdown 

    const [openReport, setopenReport] = React.useState(false);

    const handleClickReport = () => {
        setopenReport(!openReport);
    };

    const [openStock, setopenStock] = React.useState(false);

    const handleClickStock = () => {
        setopenStock(!openStock);
    };

    const [openFinance, setopenFinance] = React.useState(false);

    const handleClickFinance = () => {
        setopenFinance(!openFinance);
    };

    const [openSalesReport, setopenSalesReport] = React.useState(false);

    const handleClickSalesReport = () => {
        setopenSalesReport(!openSalesReport);
    };



    return (

        <>

            <ListItemButton onClick={handleClickReport} id='ListItmBtn'>
                <ListItemIcon>
                    <FontAwesomeIcon id='icon' icon={faList} size='lg' />
                </ListItemIcon>
                <ListItemText primary="B-Report (s)" />
                {openReport ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openReport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickSalesReport} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faClipboard} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Sales Report(s)" />
                        {openSalesReport ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openSalesReport} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="Test  item" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="View Delivery Note" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>


                {/* Receipt section   */}

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickStock} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faClipboard} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Stock Report(s)" />
                        {openStock ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openStock} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                                <ListItemText primary="View Receipts" />
                            </ListItemButton>

                        </List>
                    </Collapse>
                </List>


                {/* Receipt section   */}

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleClickFinance} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faClipboard} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Finance Report(s)" />
                        {openFinance ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openFinance} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                                <ListItemIcon>
                                    {/* Your Icon Component */}
                                </ListItemIcon>
                                <ListItemText primary="View Receipts" />
                            </ListItemButton>

                        </List>
                    </Collapse>
                </List>


            </Collapse>
        </>

    );

}
