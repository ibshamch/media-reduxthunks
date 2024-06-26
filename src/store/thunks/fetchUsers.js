import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// first argument is base type
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3005/users");
  await pause(1000);
  return res.data;
});

//DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { fetchUsers };
