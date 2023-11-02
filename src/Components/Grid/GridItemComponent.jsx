import { styled } from '@mui/material/styles';
import{Box} from "@mui/material";
const GridItemComponent = styled(Box)(({ theme, spacing }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: spacing ? theme.spacing(spacing): theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: "none",
  }));
  export default GridItemComponent;