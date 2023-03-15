import { Button } from "../../../../UIKit/Button";
import { Typography, TextField } from "@mui/material";

export const ChangePassword = (props) => {
  const { register, errors } = props;
  return (
    <>
      <Typography variant="h4" marginBottom="15px" textAlign="center" fontFamily="Roboto">
        Change password
      </Typography>
      <TextField
        error={!!errors.oldPassword}
        fullWidth={true}
        margin="normal"
        type="password"
        variant="outlined"
        placeholder="Old password"
        helperText={errors.password ? `${errors.oldPassword.message}` : ""}
        {...register("oldPassword")}
      />
      <TextField
        error={!!errors.newPassword}
        fullWidth={true}
        margin="normal"
        variant="outlined"
        type="password"
        placeholder="Password"
        helperText={errors.newPassword ? `${errors.newPassword.message}` : ""}
        {...register("newPassword")}
      />
      <TextField
        error={!!errors.repeatNewPassword}
        fullWidth={true}
        margin="normal"
        type="password"
        variant="outlined"
        placeholder="Repeat password"
        helperText={errors.repeatNewPassword ? `${errors.repeatNewPassword.message}` : ""}
        {...register("repeatNewPassword")}
      />
      <Button type="submit" variant="contained" text="Change password"></Button>
    </>
  );
};
