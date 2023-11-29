import React from "react";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { ListItemText, List, ListItemIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLineChart } from "@fortawesome/free-solid-svg-icons";
import { ListItemButton } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SalesSection() {
    // handle the Analytics dropdown

    const [openAnalytics, setopenAnalytics] = React.useState(false);

    const handleClickAnalytics = () => {
        setopenAnalytics(!openAnalytics);
    };

    return (

        <>
            <ListItemButton onClick={handleClickAnalytics} id='ListItmBtn'>
                <ListItemIcon>
                    <FontAwesomeIcon id='icon' icon={faLineChart} size='lg' />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
                {openAnalytics ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAnalytics} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
                        <ListItemIcon>
                            <FontAwesomeIcon id='icon' icon={faAdd} size='xs' />
                        </ListItemIcon>
                        <ListItemText primary="Add-GRN" />
                    </ListItemButton>
                </List>


                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} id='ListItmBtn'>
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