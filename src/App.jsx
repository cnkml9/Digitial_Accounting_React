import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Layout from "./Components/Layout";

import { Box } from "@mui/material";

import RouterComponent from "./Services/Router/Route";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer />
      <Layout />
      <Box>
        <RouterProvider router={RouterComponent} />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
