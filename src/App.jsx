import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 // assuming Navbar is in the same directory
import Dashboard from "./Pages/Dashboard";
import AddInvoice from "./Pages/Invoice/AddInvoice";
import InvoiceView from "./Pages/Invoice/InvoiceView";
import AddCustomers from "./Pages/Customers/addCustomers";
import ViewCustomers from "./Pages/Customers/viewCustomers";
import AddGRN from "./Pages/GRN/GrnAdd";
import ViewGRN from "./Pages/GRN/ViewGRN";
import Login from "./Components/Login";

import Navbar from './Components/Navbar'
import TestTable from './Pages/TestTable';

function App() {
 

  return (
    <Router>
     
     
        <Routes>
         {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/" element={<Navbar><Dashboard/></Navbar>} />
        <Route path="/invoiceAdd" element={<Navbar><AddInvoice /></Navbar>} />
        <Route path="/invoiceView" element={<Navbar><InvoiceView /></Navbar>} />
        <Route path="/addCustomers" element={<Navbar><AddCustomers /></Navbar>} />
        <Route path="/viewCustomers" element={<Navbar><ViewCustomers /></Navbar>} />
        <Route path="/addGRN" element={<Navbar><AddGRN /></Navbar>} />
        <Route path="/ViewGRN" element={<Navbar><ViewGRN /></Navbar>} />

        </Routes>
     
    </Router>
  )
}

export default App
