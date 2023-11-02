import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
export default function SearchComboBox({
  fullWidth,
  label,
  exportSelectedItem,
  optionList,
}) {
  const [searchValue, setSearchValue] = useState("");
  const handleItemSelected = (event, value) => {
    event.preventDefault();
    exportSelectedItem(value);
    // Seçim yapıldıktan sonra değeri hemen döndür
    if (value) {
      exportSelectedItem(value);
    }
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchValue(value);
    console.log(searchValue);
  };
  const options = optionList ? Object.values(optionList) : [];
  useEffect(() => {}, [options]);
  return (
    <Autocomplete
      fullWidth={fullWidth}
      options={options}
      getOptionLabel={(option) => option.name || ""}
      onChange={handleItemSelected}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          onChange={handleSearchChange}
        />
      )}
    />
  );
}
