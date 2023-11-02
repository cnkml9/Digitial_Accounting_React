import { ListItemButton } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
const SidebarItem = ({ item }) => {
  return item.href && item.menuName ? (
    <ListItemButton
      href={item.href}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor: "unset",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      {item.IconComponent && <item.IconComponent sx={{m:1}} />}
      {item.menuName}
    </ListItemButton>
  ) : null;
};
export default SidebarItem;
