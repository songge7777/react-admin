import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as reducer from "./modules";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist:[]
};
const reducers = combineReducers({
  ...reducer
});
const myPersistReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  // 合并多个Slice
  reducer: myPersistReducer,
  // 不加他 会报错
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});
export const persistor = persistStore(store);

// configureStore 创建一个 redux 数据


export default store;