import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  loginInfo: {};
  events:{};
  eventMessage:string;
  title: string
}
const initialState: LoginState = {
  loginInfo: {},
  events:{},
  eventMessage:"",
  title: "redux toolkit pre"
};

// 创建一个 Slice
export const login = createSlice({
  name: "login",
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    setLoginInfo(state, { payload }){
      state.loginInfo = payload.loginInfo;
    },
    setEvents(state, { payload }){
      state.events = payload.events;
    },
    setMessage(state, { payload }){
      state.eventMessage = payload.eventMessage;
    },
  },
});

// 导出 reducers 方法
export const { setLoginInfo,setEvents,setMessage } = login.actions;

// 默认导出
export default login.reducer;