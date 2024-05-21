import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  const res = await axios.delete(`http://localhost:3005/users/${user.id}`);
  await pause(1000);
  return res.data;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { removeUser };
