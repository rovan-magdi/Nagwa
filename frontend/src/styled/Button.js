import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "auto",
  margin: "0px 8px 0px 8px",
  textTransform: "capitalize",
  backgroundColor: `${theme.palette.secondary.dark}`,
  color: `${theme.palette.primary.main}`,
  fontWeight: "bold",
 textAlign:"left",
 "&:focus":{
  backgroundColor: `${theme.palette.secondary.main}`,
  color: `${theme.palette.primary.light}`,



 }
}));
export const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  color: `${theme.palette.primary.light}`,
  marginTop: "20px",
  height: "60px",
  width: "100px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  "&:focus":{
    backgroundColor: `${theme.palette.secondary.main}`,
    color: `${theme.palette.primary.light}`,
  
   }
}));
