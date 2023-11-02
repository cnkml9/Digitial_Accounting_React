import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
const ComboBoxComponet = (
    {
        sx,
        fullWidth,
        label,
        value,
        changeHandler,
        menuList
    }) => {
  return (
    <>
      <FormControl
        fullWidth={fullWidth}
        sx={sx}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          onChange={changeHandler}
          label={label}
        >
          {menuList.list.map((item, index) => (
            <MenuItem value={index} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default ComboBoxComponet;