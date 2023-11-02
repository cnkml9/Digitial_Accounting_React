import Navbar from "./Navbar";
import { Box } from "@mui/material";
import SideBarComponent from "./SideBarElements.jsx/SideBar";

import colorConfigs from "../configs/colorConfigs.ts";
import sizeConfigs from "../configs/sizeConfigs";
const Layout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{
            width: sizeConfigs.sidebar.width,
            flexShrink: 0,
          }}
        >
          <SideBarComponent />
        </Box>
      </Box>
    </>
  );
};
export default Layout;
