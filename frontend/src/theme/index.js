import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme  = createTheme({

  palette: {
    primary: {
      main: "#7FBCD2",
      light:"#F5EDDC",
      dark: "#2B4865",
    },
    secondary: {
      main: "#256D85",
      light:'#F1F4F3',
      dark:"#ffffff"

    },
    

  },typography: {
    caption:{

      textSize:"12px",
      fontWeight:"900"
    }
      
    
    }
})
export {theme};
