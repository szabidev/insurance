import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  rca: [] as RCA[],
  casco: [] as Casco[],
};

interface RCA {
  make: string;
  manufactured: string;
  regNo: string;
  payment: string;
  dateCreated: string;
}

interface Casco {
  chassisNo: string;
  km: number;
  payment: string;
  dateCreated: string;
}

const offerDetailsSlice = createSlice({
  name: "offerDetails",
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setDateOfBirth(state, action: PayloadAction<string>) {
      state.dateOfBirth = action.payload;
    },
    setRCA(state, action: PayloadAction<RCA>) {
      state.rca.push(action.payload);
    },
    setCasco(state, action: PayloadAction<Casco>) {
      state.casco.push(action.payload);
    },
  },
});

export const { setFirstName, setLastName, setDateOfBirth, setRCA, setCasco } =
  offerDetailsSlice.actions;

export const offerDetails = offerDetailsSlice.reducer;
