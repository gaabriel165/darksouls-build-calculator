import { Box, Typography } from "@mui/material";

import { useStyles } from "./styles";

import { SimpleSelect } from "../../components/SimpleSelect";
import { dsclasses } from "./dsclasses";

export const Ds1BuildCalculator = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" className={classes.title}>
        Dark Souls 1
      </Typography>

      <Box className={classes.root}>
          <SimpleSelect name="Class" options={dsclasses}/>
      </Box>
    </Box>
  );
};
