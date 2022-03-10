import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#497B92",
      main: "#009FE3",
      dark: "#223A45",
    },
    secondary: {
      light: "#7A7A7A",
      main: "#54595F",
      dark: "#26363E",
    },
    success: {
      main: "#EA9C02",
    },
    background: {
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Lato",
  },
});

export default theme;
