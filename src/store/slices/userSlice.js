import { createSlice } from "@reduxjs/toolkit";
import { changePass, regUser, signIn } from "../../components/auth/actions/actions";
import { toast } from "react-toastify";
const initialState = {
  user: {
    email: "",
    password: "",
  },
  isLogged: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "login";
        state.isLogged = action.payload;
        toast.info("You have successfully logged", {
          position: "top-right",
        });
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(regUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.status = "register";
        state.isLogged = true;
        state.user = action.payload;
        toast.success("You have successfully registered", {
          position: "top-right",
        });
      })
      .addCase(regUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(changePass.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changePass.fulfilled, (state, action) => {
        state.status = "changed";
        state.user.password = action.payload;
        toast.success("Password changed successfully", {
          position: "top-right",
        });
      })
      .addCase(changePass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loginUser, logoutUser, registerUser, changePasswordUser } = authSlice.actions;

export default authSlice.reducer;
