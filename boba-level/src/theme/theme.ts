import { Montserrat, Roboto, Merriweather } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#523A28",
    },
    secondary: {
      main: "#BF6336",
    },
    text: {
      primary: "#000000",
      secondary: "#BF6336",
    },
    background: {
      default: "#EDF1F2",
      paper: "#EDF1F2",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
      // "@media (max-width:920px)": {
      //   fontSize: "3rem",
      // },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "500",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "500",

      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      // fontFamily: montserrat.style.fontFamily,
      fontSize: "1rem",
      fontWeight: "500",
      // fontStyle: "italic",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        // paper: {
        //   color: "#3e656c",
        //   backgroundColor: "#000000",
        // },
      },
    },
  },
});

export default theme;
