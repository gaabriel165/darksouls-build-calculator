import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

import { useStyles } from "./styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" className={classes.appbar}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <Box flexGrow={1}>
            <IconButton href="/">
              <HomeIcon sx={{ marginTop: -0.5 }} />
            </IconButton>
            <IconButton href="/darksouls1">DS</IconButton>
            <IconButton>DS 2</IconButton>
            <IconButton>DS 3</IconButton>
            {/* <IconButton>Bloodborne</IconButton> */}
            {/* <IconButton>Sekiro</IconButton> */}
            <IconButton>Elden Ring</IconButton>
          </Box>

          <Box>
            <IconButton>Sign In</IconButton>
            <IconButton>Sign Up</IconButton>
            <IconButton>
              <SettingsIcon sx={{ marginTop: -0.5 }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
