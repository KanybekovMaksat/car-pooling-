import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useState } from "react";

const filter = createFilterOptions();

export const SearchForm = () => {
  const [value, setValue] = useState(null);

  return (
    <div className="bg-[#19191C] text-white p-[1rem] rounded-[12px] mb-[10px]">
      <h2>Hi Roger,</h2>
      <p className="mb-[20px]">Where are you going today?</p>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              {option.title}
            </li>
          );
        }}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Type the address..."
            sx={{
              "& .MuiInputBase-input": {
                color: "white", // or any color you'd like
              },
              "& .MuiInputLabel-root": {
                color: "white", // Change label color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Border color when focused
                },
              },
            }}
          />
        )}
      />
    </div>
  );
};

const top100Films = [{ title: "Цум Айчурок" }, { title: "Дордой плаза" }];
