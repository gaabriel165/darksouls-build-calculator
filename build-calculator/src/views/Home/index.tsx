import { Box, Typography } from "@mui/material";

import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();

  return (
    <Box mt={20}>
      <Typography variant="h3" className={classes.typography}>
        Souls like game content
      </Typography>
      <Typography variant="h3" className={classes.typography}>
        Coming soon...
      </Typography>

      <img
        alt="bonfire"
        src={require("./bonfire.gif")}
        className={classes.img}
      />
    </Box>
  );
};
