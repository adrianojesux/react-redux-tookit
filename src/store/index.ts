import { configureStore } from "@reduxjs/toolkit";

import counterStore from "./slices/counter";

const store = configureStore({
  reducer: {
    counter: counterStore,
  },
});

export default store;
