import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { faUniversalAccess, faUser, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';



export default function AdminSection() {


    // handle the Administration dropdown
    const [openAdministration, setopenAdministration] = React.useState(false);

    const handleClickAdministration = () => {
        setopenAdministration(!openAdministration);
    };



    return (

        <>
            <ListItemButton onClick={handleClickAdministration} id='ListItmBtn'>
                <ListItemIcon>
                    <FontAwesomeIcon id='icon' icon={faUniversalAccess} size='lg' />
                </ListItemIcon>
                <ListItemText primary="Administration" />
                {openAdministration ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAdministration} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faUser} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Manage Users" />
                    </ListItemButton>
                </List>


                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faUnlockAlt} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Access Controll" />
                    </ListItemButton>
                </List>
            </Collapse>

        </>
    );
}