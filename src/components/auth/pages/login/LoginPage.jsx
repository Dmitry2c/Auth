import { TextField, Typography } from "@mui/material";
import { Button } from "../../../../UIKit/Button";
export const LoginPage = (props) => {
  const { register, errors } = props;

  return (
    <>
      <Typography variant="h4" marginBottom="15px" textAlign="center" fontFamily="Roboto">
        Log in
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
        variant="outlined"
        placeholder="Password"
        type="password"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <Button type="submit" variant="contained" text="Log in"></Button>
    </>
  );
};
