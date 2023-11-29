import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Button } from "@mui/material";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import Name from "./Name";
import "../assets/Navbar.css";

// Side Bar Section Imports
import Dashboard from "../Pages/Dashboard";
import SalesSection from "./SideBarSections/SalesSection";
import InventorySection from "./SideBarSections/InventorySection";
import BReportSection from "./SideBarSections/B_ReportSection";
import GrnSection from "./SideBarSections/GrnSection";
import AnalyticsSection from "./SideBarSections/AnalyticsSection";
import AdminSection from "./SideBarSections/AdminSection";
import AddInvoice from "../Pages/Invoice/AddInvoice";

import ViewInvoice from "../Pages/Invoice/InvoiceView";
import AddCustomers from "../Pages/Customers/addCustomers";
import ViewCustomers from "../Pages/Customers/viewCustomers";
import AddGRN from "../Pages/GRN/GrnAdd";
import ViewGRN from "../Pages/GRN/ViewGRN";
import Login from "../Components/Login";


// import SignUp from "../Components/SignUp";



const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <body backgroundColor="#AAB7B8">
        <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className="NavBarColor"
            open={open}
            style={{ backgroundColor: "#011f4b  " }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                color={"#b3cde0"}
                component="div"
              >
                BIZ-Pilot
              </Typography>
              <Button variant="outlined" style={{ display: 'flex', justifyContent: 'right' }}>Primary</Button>
            </Toolbar>




          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            color="white"
          >
            <DrawerHeader sx={{ background: "#011f4b" }}>
              <IconButton onClick={handleDrawerClose} color="white">
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>

            </DrawerHeader>
            <Divider />

            <List>
              <ListItem disablePadding>
                {/* <ListItemButton
                    component={Link}
                    to="/dashboard"
                    className="list-item"
                    id="ListItmBtn"
                  > */}

                <ListItemButton
                  component={Link}
                  to="/login"
                  className="list-item"
                  id="ListItmBtn"
                >
                  <ListItemIcon>
                    <FontAwesomeIcon id="icon" icon={faHome} size="lg" />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <SalesSection />
              <InventorySection />
              <BReportSection />
              <GrnSection />
              <AnalyticsSection />
              <AdminSection />
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />




            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/invoiceAdd" element={<AddInvoice />} />
                <Route path="/invoiceView" element={<ViewInvoice />} />
                <Route path="/addCustomers" element={<AddCustomers />} />
                <Route path="/viewCustomers" element={<ViewCustomers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addGRN" element={<AddGRN />} />
                <Route path="/ViewGRN" element={<ViewGRN />} />

              </Routes>
          </Main>
        </Box>
        </Router>
      </body>
    </>
  );
}