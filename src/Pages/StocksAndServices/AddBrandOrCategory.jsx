import ContentHeaderComponent from "../../Components/ContentHeader";
import {
  FormControl,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Button,
  Stack,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
const AddBrandOrCategoryPage = () => {
  return (
    <>
        <ContentHeaderComponent description={"Kategori & Marka Ekle"} />
        <div className="content row">
          <div className="col-md-3">
            <input
              type="search"
              id="form1"
              className="form-control mb-3"
              placeholder="Marka İsmi"
              aria-label="Search"
            />
            <button className="btn btn-primary">Marka Ekle</button>
          </div>
          <div className="col-md-3">
            <input
              type="search"
              id="form1"
              className="form-control mb-3"
              placeholder="Kategori"
              aria-label="Search"
            />
            <button className="btn btn-primary">Kategori Ekle</button>
          </div>
        </div>        
    </>
  );
};
export default AddBrandOrCategoryPage;
