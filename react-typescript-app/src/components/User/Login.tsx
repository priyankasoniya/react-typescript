import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="login-page">
      <Button
        size="large"
        onClick={() => {
          sessionStorage.setItem("isAuthenticated", "yes");
          navigate("/home");
        }}
      >
        {"LOGIN TO THE APP"}
        <span className="material-symbols-outlined">login</span>
      </Button>
    </div>
  );
};

export default Login;
