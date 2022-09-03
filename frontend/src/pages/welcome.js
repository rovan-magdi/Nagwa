import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/PrivateRoute";

import { TextField, Button, Box, Stack } from "@mui/material";
let Welcome = (props) => {
  const navigate = useNavigate();
  let Start = () => {
    navigate("/exam");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        height: "100vh",
        
      }}
    >
      <Stack spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" onClick={Start}>
          Start
        </Button>
      </Stack>
    </Box>
  );
};

export default Welcome;
