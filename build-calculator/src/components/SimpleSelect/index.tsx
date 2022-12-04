import { Box, Typography, Select, MenuItem } from "@mui/material";

import { useStyles } from "./styles";

interface SimpleSelectProps {
  name: string;
  options: string[];
}

export const SimpleSelect = ({ name, options }: SimpleSelectProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" p={10}>
      <Typography>{name}</Typography>
      <Select
        id="simple-select"
        className={classes.root}
        variant="standard"
        disableUnderline
      >
        {options.map((option) => {
          return (
            <MenuItem value={option} className={classes.optionText}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};
