import { Box, TextField } from "@mui/material";
const TextInputComponent = ({
  type = "text",
  sx,
  label,
  fullWidth,
  onChangeHandler,
  noValidate,
  isDisabled = false,
  autoComplete = "off",
}) => {
  return (
    <>
      <Box
        component="form"
        noValidate={noValidate}
        autoComplete={autoComplete}
        sx={sx}
      >
        <TextField
          disabled={isDisabled}
          fullWidth={fullWidth}
          type={type}
          label={label}
          id="outlined"
          onChange={onChangeHandler}
        />
      </Box>
    </>
  );
};
export default TextInputComponent;
