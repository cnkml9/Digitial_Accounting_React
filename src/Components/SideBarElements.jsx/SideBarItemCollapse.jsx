import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import colorConfigs from "../../configs/colorConfigs";
import SidebarItem from "./SideBarItem";
import { useState } from "react";
const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return item.menuName ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        {<item.IconComponent sx={{
          m:1
        }} />}
        <ListItemText
          sx={{ color: colorConfigs.sidebar.color }}
          disableTypography
          primary={<Typography>{item.menuName}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.altItems?.map((altItem, index) =>
            altItem.href && altItem.menuName ? (
              <SidebarItem item={altItem} key={index} />
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
