import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const loginDetailSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = loginDetailSlice.actions;

export const loginDetails = loginDetailSlice.reducer;
