import React from "react";



import ListItemIcon from '@mui/material/ListItemIcon';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartArrowDown , faAdd ,faEye } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom';
export default function GrnSection() {

    const [openGRN, setopenGRN] = React.useState(false);

    const handleClickGRN = () => {
        setopenGRN(!openGRN);
    };




    return (
        <>
         <ListItemButton onClick={handleClickGRN} id='ListItmBtn'>
                                    <ListItemIcon>
                                        <FontAwesomeIcon id='icon' icon={faCartArrowDown} color='' size='lg' />
                                    </ListItemIcon>
                                    <ListItemText primary="GRN" />
                                    {openGRN ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openGRN} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to='/addGRN'>
                                            <ListItemIcon>
                                                <FontAwesomeIcon id='icon' icon={faAdd} size='xs' />
                                            </ListItemIcon>
                                            <ListItemText primary="Add-GRN" />
                                        </ListItemButton>
                                    </List>


                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }} id='ListItmBtn' component={Link} to='/ViewGRN'>
                                            <ListItemIcon>
                                                <FontAwesomeIcon id='icon' icon={faEye} size='xs' />
                                            </ListItemIcon>
                                            <ListItemText primary="View-GRN" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>

        </>
    );
}