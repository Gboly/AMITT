import "./spinner.css";
import { CircularProgress } from "@mui/material";

export default function Spinner({ sxx, desc }) {
  return (
    <div className={`spinner ${sxx}`}>
      <CircularProgress sx={{ color: "var(--primary-color)" }} />
      <p>{desc || ""}</p>
    </div>
  );
}
