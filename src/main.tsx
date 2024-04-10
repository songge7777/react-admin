import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

import { HashRouter,BrowserRouter } from "react-router-dom";
import store from "@/store";
import "@/styles/index.scss";
import { persistor } from "@/store/index";
import { PersistGate } from "redux-persist/lib/integration/react";

import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn"); // 全局使用简体中文

import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>
);
