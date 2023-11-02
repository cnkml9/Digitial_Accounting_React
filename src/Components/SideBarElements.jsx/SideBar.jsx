import Logo from "/dist/img/logo.svg";
import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import { BaseMenu } from "./siderBarNavigator";
import SidebarItem from "./SideBarItem";
import SidebarItemCollapse from "./SideBarItemCollapse";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {BaseMenu.map((menuItem, index) =>
          menuItem.menuName && menuItem.IconComponent ? (
            menuItem.altItems.length > 0 ? (
              <SidebarItemCollapse item={menuItem} key={index} />
            ) : (
              <SidebarItem item={menuItem} key={index} />
            )
          ) : null
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FormatListBulletedIcon />
          </Button>
          <Drawer
            sx={{
              width: sizeConfigs.sidebar.width,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: sizeConfigs.sidebar.width,
                boxSizing: "border-box",
                borderRight: "0px",
                backgroundColor: colorConfigs.sidebar.bg,
                color: colorConfigs.sidebar.color,
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}