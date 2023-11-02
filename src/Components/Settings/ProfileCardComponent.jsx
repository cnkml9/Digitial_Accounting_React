import ChangePasswordComponent from "../../Components/Settings/ChangePasswordInfoComponent";
import GeneralComponent from "./CompanyInfoComp";
import RegisteredUsersComponent from "../../Components/Settings/RegisteredUsersComponent";
import UserInfoComponent from "../../Components/Settings/UserInfoComponent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Button,
  Stack,
  CardHeader,
  InputLabel,
  Select,
  Checkbox,
  MenuItem,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  TableBody,
  Paper,
  FormLabel,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import GridItemComponent from "../Grid/GridItemComponent";
import ContentHeaderComponent from "../ContentHeader";
const ProfileCardComponent = () => {
  // this is the profile component
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >

          <Grid
            item
            xs={15}
            md={15}
            sx={{
              height: "33%",
              width: "100%",
              mt: 10,
            }}
          >
            <GridItemComponent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                sx={{
                  width: 100,
                  height: 100,
                }}
              />
            </GridItemComponent>
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
              }}>
              <ContentHeaderComponent
                dontUse={true}
                sx={{ ml: "auto", width: "100%", height: "10vh" }}
                description={"Muhammed Ali Bekdaş"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <p>m.ali.software.dev@gmail.com</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ProfileCardComponent;
