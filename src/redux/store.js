import { configureStore} from "@reduxjs/toolkit";

import contactsSliceReduser from "./contactsSlice";
import filtersSliceReducer from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistContactsConfig = {
  key: 'contactsItem',
  storage,
}



const persistedContactsReducer = persistReducer(
  persistContactsConfig, contactsSliceReduser
)










export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,
      filters: filtersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });


export const persistor = persistStore(store)







