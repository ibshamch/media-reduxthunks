import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
// first argument is base type
const addUser = createAsyncThunk("users/add", async () => {
  const res = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  await pause(1000);
  return res.data; // this will be the payload
});

//DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { addUser };
