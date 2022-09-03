import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledButtonSubmit } from "../styled/Button";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: "6rem" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Result() {
  const [rank, setRank] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(localStorage.getItem("result"));
  }, []);

  useEffect(() => {
    let storedScore = localStorage.getItem("result")
      ? JSON.parse(localStorage.getItem("result") || "")
      : "";
    console.log();
    if (!storedScore) navigate("/");
    axios
      .post("http://localhost:5000/rank", { score: storedScore })
      .then((response) => setRank(response.data.rank));
  }, [navigate]);

  //again exam
  let reTrake = () => {
    localStorage.setItem("result", 0);
    navigate("/");
  };

  return (
    <>
      <CircularProgressWithLabel value={progress} size="30rem" />
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          your rank is
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{rank.toFixed(2)}</Typography>
        <StyledButtonSubmit onClick={reTrake}>Again Exam</StyledButtonSubmit>
      </Box>
    </>
  );
}
