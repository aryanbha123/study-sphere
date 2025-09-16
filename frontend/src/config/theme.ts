import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    supporting: Palette['primary'];
  }
  interface PaletteOptions {
    supporting?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
    palette : {
        primary: {
            main : "#fff"
        },
        secondary :{ 
            main: "#f1f1f1"
        },
        supporting : {
            main : "#010101"
        }

    }
});
export default theme;