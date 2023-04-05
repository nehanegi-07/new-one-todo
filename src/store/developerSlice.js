import { createSlice } from "@reduxjs/toolkit";

const developerSlice = createSlice({
  name: "devList",
  initialState:  [
      {
        value: "Developer 1",
        label: "1",
      },
      {
        value: "Developer 2",
        label: "2",
      },
      {
        value: "Developer 3",
        label: "3",
      },
      {
        value: "Developer 4",
        label: "4",
      },
    ]
});

export const developerReducer = developerSlice.reducer;
