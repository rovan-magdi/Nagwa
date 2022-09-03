import { styled } from "@mui/material/styles";
import { Box,Typography } from "@mui/material";

export const StyledContainerButtons = styled(Box)(({ theme }) => ({
    margin:"10px 30px 10px 30px",
    padding:"50px",
    height: "300px",
    width:"300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    
    backgroundColor: `${theme.palette.secondary.light}`,
}));

export const StyledWord = styled(Typography)(({ theme }) => ({
    fontSize:"1.5rem",
    textTransform:"capitalize",
    fontWeight:"bold",
}));
