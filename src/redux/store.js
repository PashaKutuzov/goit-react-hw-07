import { configureStore} from "@reduxjs/toolkit";

import contactsSliceReduser from "./contactsSlice";
import filtersSliceReducer from "./filtersSlice";

















export const store = configureStore({
    reducer: {
      contacts: contactsSliceReduser,
      filters: filtersSliceReducer,
  },

  });










