import { ThemeProvider, createTheme } from "@mui/material";
import "./fonts.css";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Arial",
      color: "#d2b48c"
    },
    fontFamily: "Aclonica",
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: "white",
          fontFamily: "Aclonica",
        },
      },
    },
  },
});

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeV1 = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
