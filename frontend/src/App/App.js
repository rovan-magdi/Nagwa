import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/index";
import Practice from "../pages/practice";
import Result from "../pages/result";
import Welcome from "../pages/welcome";
import Image from '../assets/background.png'
// import PrivateRoutes from "../utils/PrivateRoute";

function App() {
  return (
    <Box sx={{ textAlign: 'center', backgroundImage: `url(${Image})`}}>
      {/* use theme for MUI */}
      <ThemeProvider theme={theme}>
        {/* Use react-router-dom */}
        <BrowserRouter>
          <Routes>
            {/* <Route element={<PrivateRoutes />}> */}
              <Route path="/exam" element={<Practice />} />
              <Route path="/result" element={<Result />} />
            {/* </Route> */}
          <Route path="/" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
