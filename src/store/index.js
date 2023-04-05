import { configureStore } from "@reduxjs/toolkit";
import { developerReducer} from "./developerSlice";

const store = configureStore({
  reducer: {
    developers: developerReducer,
  }
});

export { store };
