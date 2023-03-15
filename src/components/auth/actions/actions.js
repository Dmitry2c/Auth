import { createAsyncThunk } from "@reduxjs/toolkit";
export const signIn = createAsyncThunk("user/signIn", async () => {
  const response = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        isLogged: true,
      });
    }, 2000)
  );
  return response.isLogged;
});

export const regUser = createAsyncThunk("user/register", async (user) => {
  const response = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        user,
      });
    }, 2000)
  );
  console.log(user);
  return response.user;
});

export const changePass = createAsyncThunk("user/changePass", async (newPassword) => {
  const response = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        newPassword,
      });
    }, 2000)
  );
  console.log(newPassword);
  return response.newPassword;
});
