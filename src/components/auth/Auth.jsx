import { useLocation, useNavigate } from "react-router-dom";
import { RegisterPage } from "./pages/register/RegisterPage";
import { LoginPage } from "./pages/login/LoginPage";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { ChangePassword } from "./pages/changePass/ChangePassword";
import { useAuth } from "../../store/hooks/useAuth";
import {useUser} from "../../store/hooks/useUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import { ChangePasswordSchema, LoginSchema, RegisterSchema } from "./yup";
import { changePass, regUser, signIn } from "./actions/actions";
import { HomePage } from "../home/HomePage";
export const Auth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useAuth();
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      location.pathname === "/login"
        ? LoginSchema
        : location.pathname === "/register"
        ? RegisterSchema
        : ChangePasswordSchema
    ),
  });

  const handleSubmitForm = (data) => {
    if (location.pathname === "/register" && data.password === data.repeatPassword) {
      dispatch(regUser({ email: data.email, password: data.password }));
      navigate("/");
    }
    if (location.pathname === "/login" && data.email === user.email && data.password === user.password) {
      dispatch(signIn());
      navigate("/");
    }
    if (
      location.pathname === "/changePassword" &&
      data.oldPassword === user.password &&
      data.newPassword === data.repeatNewPassword
    ) {
      dispatch(changePass(data.newPassword));
      navigate("/");
    }
  };

  return (
    <div className="auth">
      <HomePage />
      <form className="auth-form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          boxShadow="5px 5px 10px black"
          margin="auto"
          padding={5}
          borderRadius={5}
        >
          {location.pathname === "/login" && !isLogged ? (
            <LoginPage register={register} errors={errors} />
          ) : location.pathname === "/register" && !isLogged ? (
            <RegisterPage register={register} errors={errors} />
          ) : location.pathname === "/register" || location.pathname === "/login" ? (
            <h1>You are logged in</h1>
          ) : null}

          {location.pathname === "/changePassword" && isLogged ? (
            <ChangePassword register={register} errors={errors} />
          ) : location.pathname === "/changePassword" ? (
            <h1>Please auth</h1>
          ) : null}
        </Box>
      </form>
    </div>
  );
};
