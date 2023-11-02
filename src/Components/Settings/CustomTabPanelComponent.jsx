import { Box } from "@mui/material";
const CustomTabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <>
      {value === index && (
        <Box
          sx={{
            p: 5,
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};
export default CustomTabPanel;
