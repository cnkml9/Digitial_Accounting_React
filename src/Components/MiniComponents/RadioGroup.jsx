import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RadioGroupComponent = ({ radioList, radioChangeHandler, row=false }) => {
  return (
    <FormControl>
      <RadioGroup
        row={row}
        aria-labelledby="row-radio-buttons-group-label"
        defaultValue="institutional"
        name="radio-buttons-group"
        onChange={radioChangeHandler}
      >
        {radioList.list.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
