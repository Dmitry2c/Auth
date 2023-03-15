import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/useAuth";
import { useStatus } from "../../store/hooks/useStatus";
import { Button } from "../../UIKit/Button";
import { logoutUser } from "../../store/slices/userSlice";
import { AppBar, Box, CircularProgress, Container, Toolbar, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
export const HomePage = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();
  const dispatch = useDispatch();
  const { status } = useStatus();
  return (
    <div className="Header-main">
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 1440,
        }}
      >
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              HomePage
            </Typography>
            {isLogged ? (
              <>
                <Button
                  variant="contained"
                  backgroundColor="#42a5f5"
                  onClick={() => dispatch(logoutUser())}
                  margin="5px"
                  color="#b2daeb"
                  width="12%"
                  text="Sign out"
                ></Button>
                <Button
                  variant="contained"
                  backgroundColor="#42a5f5"
                  onClick={() => navigate("/changePassword")}
                  color="#b2daeb"
                  width="14%"
                  text="Change password"
                ></Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  backgroundColor="#42a5f5"
                  onClick={() => navigate("/register")}
                  margin="5px"
                  color="#b2daeb"
                  width="10%"
                  text="Register"
                ></Button>
                <Button
                  variant="contained"
                  backgroundColor="#42a5f5"
                  onClick={() => navigate("/login")}
                  margin="5px"
                  color="#b2daeb"
                  width="10%"
                  text="Log in"
                ></Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {status === "loading" ? (
        <Container maxWidth="sm" component="main" sx={{ mt: 38, mb: 6 }}>
          <Typography align="center">
            <CircularProgress size="150px" />
          </Typography>
        </Container>
      ) : null}
    </div>
  );
};
