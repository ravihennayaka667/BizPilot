import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import SalesSection from '../Components/SideBarSections/SalesSection';
import InventorySection from '../Components/SideBarSections/InventorySection';
import BReportSection from '../Components/SideBarSections/B_ReportSection';
import GrnSection from '../Components/SideBarSections/GrnSection';
import AnalyticsSection from '../Components/SideBarSections/AnalyticsSection';
import AdminSection from '../Components/SideBarSections/AdminSection';




export const mainListItems = (
  <React.Fragment>

    <SalesSection />
    <InventorySection />
    <BReportSection />
    <GrnSection />
    <AnalyticsSection />
    <AdminSection />

    <SalesSection />





  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);