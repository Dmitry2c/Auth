import { Button } from "../../../../UIKit/Button";
import { TextField, Typography } from "@mui/material";

export const RegisterPage = (props) => {
  const { errors, register } = props;
  return (
    <>
      <Typography variant="h4" marginBottom="15px" textAlign="center" fontFamily="Roboto">
        Registration
      </Typography>
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        variant="outlined"
        placeholder="Email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        type="password"
        variant="outlined"
        placeholder="Password"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <TextField
        error={!!errors.repeatPassword}
        fullWidth={true}
        type="password"
        margin="normal"
        variant="outlined"
        placeholder="Repeat password"
        helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ""}
        {...register("repeatPassword")}
      />
      <Button type="submit" variant="contained" text="Register"></Button>
    </>
  );
};
