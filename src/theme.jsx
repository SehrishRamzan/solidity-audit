import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#171834",
      light: "##E5E5E5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0D0E24",
      light: "#1D1F38",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 400,
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#171834",
        color: "#ffffff",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
